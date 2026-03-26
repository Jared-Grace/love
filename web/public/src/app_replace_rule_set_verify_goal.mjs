import { app_replace_rule_set_verify_from } from "../../../love/public/src/app_replace_rule_set_verify_from.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function app_replace_rule_set_verify_goal(goal, rules_parsed) {
  log(app_replace_rule_set_verify_goal.name, {
    goal,
  });
  let se = app_replace_start_end_get(goal);
  let end = property_get(se, "end");
  let start = property_get(se, "start");
  let dfs = app_replace_rule_set_verify_from(rules_parsed, start, end);
  return dfs;
}
