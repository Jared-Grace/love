import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
export function list_one_other(
  list,
  one_get,
  other_get,
  property_name_one,
  property_name_other,
) {
  let one = null;
  let other = null;
  if (list_empty_not_is(list)) {
    one = one_get(list);
    if (list_multiple_is(list)) {
      other = other_get(list);
    }
  }
  let result = {
    [property_name_one]: one,
    [property_name_other]: other,
  };
  return result;
}
