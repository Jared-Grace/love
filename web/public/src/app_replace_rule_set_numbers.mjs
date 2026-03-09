import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_numbers() {
  const rules = app_replace_rule_set_integers_rules();
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
        start: "g",
        end: "0.e1",
      },
      {
        start: "g",
        end: "2.e+39",
      },
      {
        start: "g",
        end: ".5E-18",
      },
      {
        start: "g",
        end: "3.14e0",
      },
      {
        start: "g",
        end: "77.e4607",
      },
    ],
  };
  return r;
}
