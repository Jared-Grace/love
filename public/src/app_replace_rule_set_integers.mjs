import { app_replace_rule_set_integers_abbreivations } from "../../../love/public/src/app_replace_rule_set_integers_abbreivations.mjs";
import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_integers() {
  const rules = app_replace_rule_set_integers_rules("d");
  let abbreviations = app_replace_rule_set_integers_abbreivations();
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
        end: "5 6 7 8",
      },
    ],
  };
  return r;
}
