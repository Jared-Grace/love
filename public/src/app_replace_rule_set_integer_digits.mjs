import { app_replace_rule_set_integer_digits_abbreviations } from "../../../love/public/src/app_replace_rule_set_integer_digits_abbreviations.mjs";
import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function app_replace_rule_set_integer_digits() {
  let d = digits();
  const rules = ["g > p g", "g > p"];
  app_replace_rule_set_add_rights(rules, "d", d);
  let i = app_replace_rule_set_integer_digits_abbreviations();
  let r = {
    name: "Integer digits",
    rules,
    goals: [
      {
        start: "g",
        end: "0",
      },
      {
        start: "g",
        end: "2",
      },
      {
        start: "g",
        end: "0 3",
      },
      {
        start: "g",
        end: "5 4",
      },
      {
        start: "g",
        end: "8 9",
      },
      {
        start: "g",
        end: "7 7 7",
      },
      {
        start: "g",
        end: "0 1 2 3 4",
      },
    ],
  };
  return r;
}
