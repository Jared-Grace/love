import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_numbers() {
  const rules = app_replace_rule_set_decimals_rules();
  list_add_multiple(rules, [
    "h > a j",
    "h > g j",
    "j > i k",
    "i > e",
    "i > E",
    "k > + a",
    "k > - a",
    "k > a",
  ]);
  let r = {
    name: "Numbers",
    rules,
    goals: [
      {
        start: "h",
        end: "0 . e 1",
      },
      {
        start: "h",
        end: "2 . E + 3 9",
      },
      {
        start: "h",
        end: ". 5 e - 1 8",
      },
      {
        start: "h",
        end: "3 . 1 4 E 0",
      },
      {
        start: "h",
        end: "7 7 e 4 6 0 7",
      },
    ],
  };
  return r;
}
