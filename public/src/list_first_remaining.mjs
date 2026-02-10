import { list_first_second_generic } from "../../../love/public/src/list_first_second_generic.mjs";
import { list_skip_1 } from "../../../love/public/src/list_skip_1.mjs";
export function list_first_remaining(list) {
  const property_name = "remaining";
  let value_get = list_skip_1;
  let r = list_first_second_generic(list, value_get, property_name);
  return r;
}
