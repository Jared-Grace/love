import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
export function app_replace_rule_valid_curried(rule, current_list) {
  return function app_replace_rule_valid_curried_result(index_selected) {
    return app_replace_rule_valid(rule, index_selected, current_list);
  };
}
