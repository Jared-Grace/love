import { app_replace_rule_sets_why_generate_single } from "../../../love/public/src/app_replace_rule_sets_why_generate_single.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function app_replace_rule_sets_why_generate() {
  let r2 = app_replace_rule_sets_fns();
  function lambda2(fn) {
    let r3 = {
      f_name: fn.name,
      rule_set: fn(),
    };
    return r3;
  }
  let mapped = list_map(r2, lambda2);
  let rule_sets = invoke_multiple(r2);
  let taken = list_take(rule_sets, 2);
  await each_async(rule_sets, app_replace_rule_sets_why_generate_single);
  await each_async(rule_sets, () => {});
}
