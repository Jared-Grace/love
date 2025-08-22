import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function list_first_second_generic(list, value_get, property_name) {
  let first = null;
  let second = null;
  if (list_empty_not_is(list)) {
    first = list_first(list);
    if (list_multiple_is(list)) {
      second = value_get(list);
    }
  }
  let result = {
    first,
    [property_name]: second,
  };
  return result;
}
