import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { app_replace_rule_set_binary_numbers_goals } from "../../../love/public/src/app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers_2() {
  let r2 = range(10);
  let combineds = list_map_combine_left(r2, "b > ");
  const rules = ["a > b a", "a > b", "b > 0", "b > 1"];
  let r = {
    name: "Binary numbers",
    rules,
    goals: app_replace_rule_set_binary_numbers_goals(),
  };
  return r;
}
