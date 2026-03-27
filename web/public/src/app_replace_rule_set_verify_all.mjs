import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
import { each } from "./each.mjs";
export function app_replace_rule_set_verify_all() {
  let rule_sets = app_replace_rule_sets();
  each(rule_sets, app_replace_rule_set_verify);
}
