import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
