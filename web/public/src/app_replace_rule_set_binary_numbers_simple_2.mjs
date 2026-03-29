import { app_replace_rule_set_binary_numbers_goals } from "../../../love/public/src/app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers_simple_2() {
  let r = {
    name: "Binary Numbers Simple 2",
    rules: ["b > b b", "b > 0", "b > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("b"),
    why: "The rules generate all non-empty binary numbers by recursively expanding 'b' into either '0', '1', or two 'b's, demonstrating the construction of any sequence of binary digits.",
  };
  return r;
}
