import { app_replace_rule_set_binary_numbers_goals } from "./app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers_simple() {
  let r = {
    name: "Binary Numbers Simple",
    rules: ["0 > 0 0", "0 > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("0"),
    why: "A '0' can split into two '0's, or settle as a '1'. Splitting makes room for more digits; settling fixes a digit in place. Binary writes numbers with only these two digits.",
  };
  return r;
}
