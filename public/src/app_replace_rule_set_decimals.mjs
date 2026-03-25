import { app_replace_rule_set_decimals_abbreviations } from "../../../love/public/src/app_replace_rule_set_decimals_abbreviations.mjs";
import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
export function app_replace_rule_set_decimals() {
  const rules = app_replace_rule_set_decimals_rules();
  let abbreviations = app_replace_rule_set_decimals_abbreviations();
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
        end: "pi . di di",
      },
      {
        start: "pi . di di",
        end: "3 . 1 4",
      },
      {
        start: "pi . di ig",
        end: "pi . di di di di di",
      },
      {
        start: "pi . di di di di di",
        end: "7 . 7 di di di di",
      },
      {
        start: "7 7 . di di di di",
        end: "7 7 . 4 6 di di",
      },
      {
        start: "7 7 . 4 6 di di",
        end: "7 7 . 4 6 0 7",
      },
    ],
  };
  return r;
}
