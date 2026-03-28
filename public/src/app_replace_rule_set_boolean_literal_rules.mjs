import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
import { js_keyword_false } from "../../../love/public/src/js_keyword_false.mjs";
import { js_keyword_true } from "../../../love/public/src/js_keyword_true.mjs";
export function app_replace_rule_set_boolean_literal_rules() {
  let k = js_keyword_true();
  let v = js_keyword_false();
  let r = [k, v];
  app_replace_rule_set_add_rights(rules, "bo", r);
  return r;
}
