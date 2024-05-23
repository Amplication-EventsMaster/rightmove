import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
