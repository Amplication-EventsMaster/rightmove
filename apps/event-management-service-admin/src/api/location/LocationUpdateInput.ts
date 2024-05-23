import { EventUpdateManyWithoutLocationsInput } from "./EventUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  events?: EventUpdateManyWithoutLocationsInput;
  name?: string | null;
};
