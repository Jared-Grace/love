import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_last } from "./list_last.mjs";
import { list_one_other } from "./list_one_other.mjs";
export function list_last_remaining(list) {
  let property_name = "remaining";
  let value_get = list_take_less_1;
  let property_name_first = "last";
  let one_get = list_last;
  let result = list_one_other(
    list,
    one_get,
    value_get,
    property_name_first,
    property_name,
  );
  return result;
}
