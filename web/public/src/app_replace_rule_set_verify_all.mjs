import { each } from "../../../love/public/src/each.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
export function app_replace_rule_set_verify_all() {
  let rule_set_gets = app_replace_rule_sets_fns();
  function lambda(rule_set_get) {
    app_replace_rule_set_verify(rule_set_get);
  }
  each(rule_set_gets, lambda);
}
