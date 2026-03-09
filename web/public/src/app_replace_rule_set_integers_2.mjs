import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_integers_2() {
  const rules = app_replace_rule_set_integers_rules();
  list_add_multiple(rules, ["e > a"]);
  let r = {
    name: "Decimals",
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
