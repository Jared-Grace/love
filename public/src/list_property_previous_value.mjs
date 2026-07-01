import { list_get_property } from "../../../love/public/src/list_get_property.mjs";
import { list_index_of_previous } from "../../../love/public/src/list_index_of_previous.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function list_property_previous_value(list, property, value) {
  let item = list_find_property(list, property, value);
  let index_previous = list_index_of_previous(list, item);
  let value_new = list_get_property(list, index_previous, property);
  return value_new;
}
