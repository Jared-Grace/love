import { app_replace_rule_set_exponent_part_rules } from "./app_replace_rule_set_exponent_part_rules.mjs";
import { app_replace_rule_set_exponent_part_abbreviations } from "./app_replace_rule_set_exponent_part_abbreviations.mjs";
import { app_replace_rule_set_integers_abbreviations } from "./app_replace_rule_set_integers_abbreviations.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_integers_rules } from "./app_replace_rule_set_integers_rules.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_rule_set_exponent_part() {
  let rules = app_replace_rule_set_integers_rules();
  list_add_multiple(rules, ["sn > ig se"]);
  app_replace_rule_set_exponent_part_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_exponent_part_abbreviations(abbreviations);
  let from2 = app_replace_rule_set_integers_abbreviations();
  object_merge_set(abbreviations, from2);
  let r = {
    name: "Exponent Part",
    abbreviations,
    rules,
    goals: [
      {
        start: "sn",
        end: "ig e ig",
      },
      {
        start: "ig e ig",
        end: "di e di",
      },
      {
        start: "di e di",
        end: "2 e 5",
      },
      {
        start: "sn",
        end: "ig e + ig",
      },
      {
        start: "ig e + ig",
        end: "3 e + 4",
      },
      {
        start: "sn",
        end: "ig E - ig",
      },
      {
        start: "ig E - ig",
        end: "6 E - 1",
      },
    ],
    why: "A number in scientific notation ends with an exponent part: the letter e (or E), an optional + or - sign, then more digits — meaning 'times ten to that power'. Here the front stays a plain integer; letting that front be a decimal is the single new idea saved for Scientific Notation Numbers.",
  };
  return r;
}
