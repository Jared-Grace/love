import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_name_internal_not_assert } from "./property_name_internal_not_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function app_learn_js_object_code(object, keys) {
  arguments_assert(arguments, 2);
  ('an object written the way a person writes one, each property name bare, in the order of keys: { name: "Mary", town: "Nazareth" }');
  ("Not ",
    fn_name("js_code_object"),
    ': it writes every key computed, {["name"]: ...}, which no learner would type.');
  function written(key) {
    property_name_internal_not_assert(key);
    let line = key + ": " + json_to(object[key]);
    return line;
  }
  let list = list_map(keys, written);
  let code = "{ " + list_join_comma_space(list) + " }";
  return code;
}
