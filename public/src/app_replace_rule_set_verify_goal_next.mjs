import { list_second } from "../../../love/public/src/list_second.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_set_verify_goal_path } from "../../../love/public/src/app_replace_rule_set_verify_goal_path.mjs";
export function app_replace_rule_set_verify_goal_next(
  rules_parsed,
  start,
  end,
) {
  let path = app_replace_rule_set_verify_goal_path(rules_parsed, start, end);
  log(app_replace_rule_set_verify_goal_next.name, {
    path,
  });
  let second = list_second(path);
  return second;
}
