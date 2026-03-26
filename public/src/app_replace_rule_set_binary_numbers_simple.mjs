import { app_replace_rule_set_binary_numbers_goals } from "../../../love/public/src/app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers_simple() {
  let r = {
    name: "Binary Numbers Simple",
    rules: ["0 > 0 0", "0 > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("0"),
    why: "These replacement rules demonstrate a simple grammar for generating binary numbers. Starting from '0', the rules allow either doubling the current sequence by appending another '0' (representing binary left-shift) or changing the last '0' to a '1'. This process can generate all binary numbers by repeated application, illustrating how binary counting can be modeled with simple replacement rules.",
  };
  return r;
}
