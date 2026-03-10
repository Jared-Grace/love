import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
export function app_replace_rule_set_decimals() {
  const rules = app_replace_rule_set_decimals_rules();
  let r = {
    name: "Decimals",
    rules,
    goals: [
      {
        start: "g",
        end: "0 .",
      },
      {
        start: "g",
        end: ". 5",
      },
      {
        start: "g",
        end: "2 .",
      },
      {
        start: "g",
        end: "3 . 1 4",
      },
      {
        start: "g",
        end: "7 7 . 4 6 0 7",
      },
    ],
  };
  return r;
}
