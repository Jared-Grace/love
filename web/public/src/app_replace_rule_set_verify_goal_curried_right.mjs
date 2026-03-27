import { app_replace_rule_set_verify_goal } from "../../../love/public/src/app_replace_rule_set_verify_goal.mjs";
export function app_replace_rule_set_verify_goal_curried_right(rules_parsed) {
  return function app_replace_rule_set_verify_goal_curried_right_result(goal) {
    return app_replace_rule_set_verify_goal(goal, rules_parsed);
  };
}
