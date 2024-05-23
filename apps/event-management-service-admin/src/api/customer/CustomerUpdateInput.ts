import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  name?: string | null;
};
