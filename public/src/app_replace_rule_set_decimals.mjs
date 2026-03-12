import { app_replace_rule_set_decimals_abbreivations } from "../../../love/public/src/app_replace_rule_set_decimals_abbreivations.mjs";
import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
export function app_replace_rule_set_decimals() {
  const rules = app_replace_rule_set_decimals_rules();
  let abbreviations = app_replace_rule_set_decimals_abbreivations();
  let r = {
    name: "Decimals",
    abbreviations,
    rules,
    goals: [
      {
        start: "de",
        end: "0 .",
      },
      {
        start: "de",
        end: ". 5",
      },
      {
        start: "de",
        end: "2 .",
      },
      {
        start: "de",
        end: "3 . 1 4",
      },
      {
        start: "de",
        end: "7 7 . 4 6 0 7",
      },
    ],
  };
  return r;
}
