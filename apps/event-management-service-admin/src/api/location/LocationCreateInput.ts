import { EventCreateNestedManyWithoutLocationsInput } from "./EventCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  events?: EventCreateNestedManyWithoutLocationsInput;
  name?: string | null;
};
