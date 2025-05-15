// src/features/events/types/eventTypes.ts
export interface Event {
  _id: string;
  name: string;
  venue: string;
  description: string;
  price: number;
  imageUrl: string;
  date: string;
  category: string;
}


export type CreateEventPayload = {
  title: string;
  description: string;
  date: string;
  venue: string;
  price: string;
  category: string;
  image: File;
};

export type UpdateEventPayload = {
  title?: string;
  description?: string;
  date?: string;
  venue?: string;
  price?:  number | string;
  category?: string;
  image?: File | undefined | string;
};



// If exporting types for API responses
export type EventsResponse = Event[];