import { property_get } from "../../../love/public/src/property_get.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_replace_rule_sets_functionize() {
  let f_name = app_replace_rule_sets.name;
  let code = await function_transform_marker_specified(f_name, "rules", lambda);
  async function lambda(ast) {
    let r = marker_next_get(a);
    let next = property_get(r, "next");
  }
  return;
  let output = await function_transform(app_replace_rule_sets.name, lambda);
}
