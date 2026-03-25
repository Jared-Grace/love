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
        start: "in",
        end: "0",
      },
      {
        start: "in",
        end: "2",
      },
      {
        start: "in",
        end: "1 3",
      },
      {
        start: "in",
        end: "7 7",
      },
      {
        start: "in",
        end: "4 0",
      },
      {
        start: "in",
        end: "p di di",
      },
      {
        start: "p di di",
        end: "9 6 9",
      },
      {
        start: "in",
        end: "pi di di di",
      },
      {
        start: "pi di di di",
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
