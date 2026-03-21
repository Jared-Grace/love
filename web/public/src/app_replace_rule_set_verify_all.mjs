import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
export function app_replace_rule_set_verify_all() {
  let rule_set_gets = app_replace_rule_sets_fns();
  function lambda(rule_set_get) {
    log(app_replace_rule_set_verify_all.name, {
      rule_set_get,
    });
    let fs = app_replace_rule_set_verify(rule_set_get);
    function lambda2(f) {}
    each(fs, lambda2);
  }
  each(rule_set_gets, lambda);
}
