import { app_replace_rule_set_integers_abbreviations } from "../../../love/public/src/app_replace_rule_set_integers_abbreviations.mjs";
import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_integers() {
  const rules = app_replace_rule_set_integers_rules();
  let abbreviations = app_replace_rule_set_integers_abbreviations();
  let r = {
    name: "Integers",
    abbreviations,
    rules,
    goals: [
      {
        start: "i",
        end: "0",
      },
      {
        start: "i",
        end: "2",
      },
      {
        start: "i",
        end: "1 3",
      },
      {
        start: "i",
        end: "7 7",
      },
      {
        start: "i",
        end: "4 0",
      },
      {
        start: "i",
        end: "9 6 9",
      },
      {
        start: "i",
        end: "p di di di",
      },
      {
        start: "p di di di",
        end: "5 6 di di",
      },
      {
        start: "5 6 di di",
        end: "5 6 7 8",
      },
    ],
  };
  return r;
}
