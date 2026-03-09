import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_decimals_2() {
  const rules = app_replace_rule_set_integers_rules();
  list_add_multiple(rules, [
    "e > f . b",
    "e > f .",
    "f > a",
    "f > 0",
    "e > . b",
  ]);
  let r = {
    name: "Numbers",
    rules,
    goals: [
      {
        start: "e",
        end: "0.",
      },
      {
        start: "e",
        end: ".5",
      },
      {
        start: "e",
        end: "2.",
      },
      {
        start: "e",
        end: "3.14",
      },
      {
        start: "e",
        end: "77.4607",
      },
    ],
  };
  return r;
}
