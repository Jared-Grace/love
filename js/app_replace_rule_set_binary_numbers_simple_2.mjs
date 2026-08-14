import { app_replace_rule_set_binary_numbers_goals } from "./app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers_simple_2() {
  let r = {
    name: "Binary Numbers Simple 2",
    rules: ["b > b b", "b > 0", "b > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("b"),
    why: "Now 'b' is the placeholder rather than '0'. It can split into two 'b's to make room, or settle as a '0' or a '1'. Split until you have the right number of digits, then settle each one.",
  };
  return r;
}
