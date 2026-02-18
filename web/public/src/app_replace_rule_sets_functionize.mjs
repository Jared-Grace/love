import { each } from "../../../love/public/src/each.mjs";
import { marker_next_declare_single_init_elements } from "../../../love/public/src/marker_next_declare_single_init_elements.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_replace_rule_sets_functionize() {
  let f_name = app_replace_rule_sets.name;
  let code = await function_transform_marker_specified(f_name, "rules", lambda);
  async function lambda(a) {
    let r = marker_next_declare_single_init_elements(a);
    function lambda2(item) {}
    each(list, lambda2);
    log({
      r,
    });
  }
  return;
  let output = await function_transform(app_replace_rule_sets.name, lambda);
}
