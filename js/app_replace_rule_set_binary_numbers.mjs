import { app_replace_rule_set_binary_numbers_goals } from "./app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers() {
  let r = {
    name: "Binary Numbers",
    rules: ["g > b g", "g > b", "b > 0", "b > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("g"),
    why: "Two jobs, now split between two placeholders: g adds one more digit and then finishes, and each b settles as a 0 or a 1. Keeping the growing apart from the settling is what makes longer numbers easy to build.",
  };
  return r;
}
