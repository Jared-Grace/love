import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
export function app_replace_rule_set_verify_all() {
  let rule_set_gets = app_replace_rule_sets_fns();
  let rule_sets = invoke_multiple(rule_set_gets);
  function lambda(rule_set) {
    log(app_replace_rule_set_verify_all.name, {
      rule_set,
    });
    app_replace_rule_set_verify(rule_set);
  }
  each(rule_sets, lambda);
  return rule_set_gets;
}
