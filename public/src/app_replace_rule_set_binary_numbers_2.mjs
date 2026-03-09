import { app_replace_rule_set_binary_numbers_goals } from "../../../love/public/src/app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers_2() {
  rng;
  let r = {
    name: "Binary numbers",
    rules: ["a > b a", "a > b", "b > 0", "b > 1"],
    goals: app_replace_rule_set_binary_numbers_goals(),
  };
  return r;
}
