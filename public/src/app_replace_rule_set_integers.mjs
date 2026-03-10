import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_integers() {
  const rules = app_replace_rule_set_integers_rules();
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
        end: "1 3",
      },
      {
        start: "a",
        end: "7 7",
      },
      {
        start: "a",
        end: "4 0",
      },
      {
        start: "a",
        end: "9 6 9",
      },
      {
        start: "a",
        end: "5 6 7 8",
      },
    ],
  };
  return r;
}
