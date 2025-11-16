import { list_take_less_1 } from "../../../love/public/src/list_take_less_1.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_one_other } from "../../../love/public/src/list_one_other.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_last_remaining(list) {
  const property_name = "remaining";
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
  marker("1");
  return result;
}
