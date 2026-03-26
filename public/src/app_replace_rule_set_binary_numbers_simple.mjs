import { app_replace_rule_set_binary_numbers_goals } from "../../../love/public/src/app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers_simple() {
  let r = {
    name: "Binary Numbers Simple",
    rules: ["0 > 0 0", "0 > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("0"),
  };
  return r;
}
