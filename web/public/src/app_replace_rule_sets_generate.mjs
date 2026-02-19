import { app_replace_rule_sets_v_1_names } from "../../../love/public/src/app_replace_rule_sets_v_1_names.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { js_flo_body_empty_return_identifiers_curried_right } from "../../../love/public/src/js_flo_body_empty_return_identifiers_curried_right.mjs";
import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
export async function app_replace_rule_sets_generate() {
  let names = await app_replace_rule_sets_v_1_names();
  let r2 = js_flo_body_empty_return_identifiers_curried_right(names);
  let output = await function_transform_fn(app_replace_rule_sets, r2);
}
