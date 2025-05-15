// hooks/useCreateEvent.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent } from "../api/Events.api";
import { toast } from "react-hot-toast";
import type { CreateEventPayload } from "../Types/event";

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (event: CreateEventPayload) =>  createEvent(event),
    onSuccess: () => {
      toast.success("Event created successfully!");
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
    onError: () => {
      toast.error("Failed to create event.");
    },
  });
};
