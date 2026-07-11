import { list_first_second_generic } from "../../../love/public/src/list_first_second_generic.mjs";
import { list_skip_ } from "../../../love/public/src/list_skip_1.mjs";
export function list_first_remaining(list) {
  const property_name = "remaining";
  let value_get = list_skip_;
  let r = list_first_second_generic(list, value_get, property_name);
  if (false) {
    ("this is for copy and pasting");
    let o = {
      first,
      remaining,
    };
  }
  return r;
}
