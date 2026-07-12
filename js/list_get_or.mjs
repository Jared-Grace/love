import { list_get } from "./list_get.mjs";
import { list_index_is } from "./list_index_is.mjs";
export function list_get_or(list, index, value_not) {
  let value = value_not;
  let exists = list_index_is(list, index);
  if (exists) {
    value = list_get(list, index);
  }
  return value;
}
