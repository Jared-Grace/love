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
