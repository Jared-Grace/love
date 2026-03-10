import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function app_replace_rule_set_integer_digits() {
  let d = digits();
  const rules = ["a > id a", "a > id"];
  app_replace_rule_set_add_rights(rules, "id", d);
  let r = {
    name: "Integer digits",
    rules,
    goals: [
      {
        start: "a",
        end: "0",
      },
      {
        start: "a",
        end: "2",
      },
      {
        start: "a",
        end: "0 3",
      },
      {
        start: "a",
        end: "5 4",
      },
      {
        start: "a",
        end: "8 9",
      },
      {
        start: "a",
        end: "7 7 7",
      },
      {
        start: "a",
        end: "0 1 2 3 4",
      },
    ],
  };
  return r;
}
