import { app_replace_rule_set_add_left } from "../../../love/public/src/app_replace_rule_set_add_left.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
export function app_replace_rule_set_integers() {
  const rules = ["a > c b", "a > d", "b > d b", "d > 0", "d > c", "b > d"];
  let r2 = digits_positive();
  app_replace_rule_set_add_left(rules, "c", r2);
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
