import { list_first_second_generic } from "./list_first_second_generic.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { marker } from "./marker.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_skip } from "./list_skip.mjs";
export function list_first_remaining(list) {
  const property_name = "remaining";
  let value_get = list_skip_1;
  let result = list_first_second_generic(list, value_get, property_name);
  return result;
  marker("1");
}
