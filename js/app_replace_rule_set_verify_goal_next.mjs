import { list_first } from "./list_first.mjs";
import { log } from "./log.mjs";
import { app_replace_rule_set_verify_goal_path } from "./app_replace_rule_set_verify_goal_path.mjs";
export function app_replace_rule_set_verify_goal_next(
  rules_parsed,
  start,
  end,
) {
  let path = app_replace_rule_set_verify_goal_path(rules_parsed, start, end);
  log(app_replace_rule_set_verify_goal_next.name, {
    path,
  });
  let second = list_first(path);
  return second;
}
