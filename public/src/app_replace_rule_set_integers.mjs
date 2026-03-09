import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
export function app_replace_rule_set_integers() {
  const rules = ["a > c b", "a > d", "b > d b", "d > 0", "d > c", "b > d"];
  let p = digits_positive();
  app_replace_rule_set_add_rights(rules, "c", p);
  let r = {
    name: "Integers",
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
        end: "13",
      },
      {
        start: "a",
        end: "77",
      },
      {
        start: "a",
        end: "40",
      },
      {
        start: "a",
        end: "969",
      },
      {
        start: "a",
        end: "5678",
      },
    ],
  };
  return r;
}
