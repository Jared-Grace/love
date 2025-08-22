import { list_first_second_generic } from "./list_first_second_generic.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { marker } from "./marker.mjs";
export function list_first_remaining(list) {
  const property_name = "remaining";
  let value_get = list_skip_1;
  let result = list_first_second_generic(list, value_get, property_name);
  marker("1");
  return result;
}
