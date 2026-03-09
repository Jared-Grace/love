import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function app_replace_rule_set_integer_digits() {
  let d = digits();
  const rules = ["a > b a", "a > b"];
  app_replace_rule_set_add_rights(rules, "b", d);
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
        end: "03",
      },
      {
        start: "a",
        end: "54",
      },
      {
        start: "a",
        end: "89",
      },
      {
        start: "a",
        end: "777",
      },
      {
        start: "a",
        end: "01234",
      },
    ],
  };
  return r;
}
