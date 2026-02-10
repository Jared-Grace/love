import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
export function app_replace_rule_valid_curry(rule, current_list) {
  let r = function app_replace_rule_valid_curried_result(index_selected) {
    let eq = app_replace_rule_valid(rule, index_selected, current_list);
    return eq;
  };
  return r;
}
