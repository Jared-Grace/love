import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { text_replace_space_underscore_lower } from "../../../love/public/src/text_replace_space_underscore_lower.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
import { js_property_value_get } from "../../../love/public/src/js_property_value_get.mjs";
export function app_replace_rule_sets_name(found) {
  let p = js_property_value_get(found);
  let l = js_literal_value_get(p);
  let rl = text_replace_space_underscore_lower(l);
  let n = app_replace_rule_sets.name;
  let without = text_suffix_without(n, "s");
  let f_name_new = function_name_combine(without, rl);
  return f_name_new;
}
