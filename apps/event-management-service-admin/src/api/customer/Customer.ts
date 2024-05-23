import { Event } from "../event/Event";

export type Customer = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
