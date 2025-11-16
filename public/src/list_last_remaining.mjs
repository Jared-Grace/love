import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_one_other } from "../../../love/public/src/list_one_other.mjs";
import { list_skip_1 } from "../../../love/public/src/list_skip_1.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_last_remaining(list) {
  const property_name = "remaining";
  let value_get = list_skip_1;
  let property_name_first = "first";
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
