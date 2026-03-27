import { app_replace_rule_set_verify_path_get } from "../../../love/public/src/app_replace_rule_set_verify_path_get.mjs";
import { app_replace_rule_set_verify_from } from "../../../love/public/src/app_replace_rule_set_verify_from.mjs";
export function app_replace_rule_set_verify_goal_path(
  rules_parsed,
  start,
  end,
) {
  let dfs = app_replace_rule_set_verify_from(rules_parsed, start, end);
  let skipped = app_replace_rule_set_verify_path_get(dfs);
  return skipped;
}
