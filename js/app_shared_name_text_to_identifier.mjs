import { function_name_combine } from "./function_name_combine.mjs";
import { text_replace_space_underscore_lower } from "./text_replace_space_underscore_lower.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { js_property_value_get } from "./js_property_value_get.mjs";
export function app_shared_name_text_to_identifier(prefix, name) {
  let p = js_property_value_get(name);
  let l = js_literal_value_get(p);
  let rl = text_replace_space_underscore_lower(l);
  let name_new = function_name_combine(prefix, rl);
  return name_new;
}
