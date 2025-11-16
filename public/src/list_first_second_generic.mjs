import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
export function list_first_second_generic(
  list,
  value_get,
  property_name_second,
) {
  let property_name_first = "first";
  let one_get = list_first;
  let first = null;
  let second = null;
  if (list_empty_not_is(list)) {
    first = one_get(list);
    if (list_multiple_is(list)) {
      second = value_get(list);
    }
  }
  let result = {
    [property_name_first]: first,
    [property_name_second]: second,
  };
  return result;
}
