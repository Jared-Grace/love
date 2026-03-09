import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
export function app_replace_rule_set_decimals() {
  const rules = app_replace_rule_set_decimals_rules();
  let r = {
    name: "Decimals",
    rules,
    goals: [
      {
        start: "g",
        end: "0.",
      },
      {
        start: "g",
        end: ".5",
      },
      {
        start: "g",
        end: "2.",
      },
      {
        start: "g",
        end: "3.14",
      },
      {
        start: "g",
        end: "77.4607",
      },
    ],
  };
  return r;
}
