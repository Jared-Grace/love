import { app_replace_rule_set_binary_numbers_goals } from "../../../love/public/src/app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers() {
  let r = {
    name: "Binary Numbers",
    rules: ["g > b g", "g > b", "b > 0", "b > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("g"),
  };
  return r;
}
