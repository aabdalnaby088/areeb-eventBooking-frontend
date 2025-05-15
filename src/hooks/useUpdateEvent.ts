// hooks/useUpdateEvent.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEvent } from "../api/Events.api";
import { toast } from "react-hot-toast";
import type { UpdateEventPayload } from "../Types/event";

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateEventPayload }) =>
      updateEvent(id, data),
    onSuccess: () => {
      toast.success("Event updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },

    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    },
  });
};
