import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_set } from "./property_set.mjs";
import { property_list_get } from "./property_list_get.mjs";
export function js_assert_json_get_call_point_at_record(call, record_name) {
  arguments_assert(arguments, 2);
  let callee = property_get(call, "callee");
  let value = fn_name("assert_json");
  property_set(callee, "name", value);
  let second = property_list_get(call, "arguments", 1);
  property_set(second, "name", record_name);
}
