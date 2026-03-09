import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_decimals() {
  const rules = app_replace_rule_set_integers_rules();
  list_add_multiple(rules, [
    "g > f . b",
    "g > f .",
    "f > a",
    "f > 0",
    "g > . b",
  ]);
  let r = {
    name: "Decimals",
    rules,
    goals: [
      {
        start: "g",
        end: "0.",
      },
      {
        start: "g",
        end: ".5",
      },
      {
        start: "g",
        end: "2.",
      },
      {
        start: "g",
        end: "3.14",
      },
      {
        start: "g",
        end: "77.4607",
      },
    ],
  };
  return r;
}
