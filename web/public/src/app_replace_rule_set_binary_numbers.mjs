import { app_replace_rule_set_binary_numbers_goals } from "../../../love/public/src/app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers() {
  let r = {
    name: "Binary Numbers",
    rules: ["g > b g", "g > b", "b > 0", "b > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("g"),
    why: "These replacement rules define a context-free grammar that generates all non-empty binary numbers (strings of 0s and 1s). The rules show how to recursively build any binary string by prepending a single binary digit (0 or 1) to a shorter binary string, or by terminating with a single digit. This demonstrates the recursive structure of binary numbers.",
  };
  return r;
}
