import { list_one_other } from "../../../love/public/src/list_one_other.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_first_second_generic(
  list,
  other_get,
  property_name_second,
) {
  let property_name_first = "first";
  let one_get = list_first;
  let result = list_one_other(
    list,
    one_get,
    other_get,
    property_name_first,
    property_name_second,
  );
  return result;
}
