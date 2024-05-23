import { Customer } from "../customer/Customer";
import { Location } from "../location/Location";

export type Event = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  location?: Location | null;
  name: string | null;
  updatedAt: Date;
};
