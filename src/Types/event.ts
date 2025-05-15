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

// If exporting types for API responses
export type EventsResponse = Event[];