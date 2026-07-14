import { app_replace_rule_set_integers_abbreviations } from "./app_replace_rule_set_integers_abbreviations.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_integers_rules } from "./app_replace_rule_set_integers_rules.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_rule_set_exponent_part() {
  let rules = app_replace_rule_set_integers_rules();
  list_add_multiple(rules, [
    "sn > ig se",
    "se > eE ex",
    "eE > e",
    "eE > E",
    "ex > + ig",
    "ex > - ig",
    "ex > ig",
  ]);
  let abbreviations = {
    eE: ['lowercase or uppercase letter "', "e", '" for "', "e", 'xponent"'],
    ex: ["", "ex", "ponent"],
    se: ["", "s", "cientific notation number ", "e", "nding"],
    sn: ["", "s", "cientific ", "n", "otation number"],
  };
  object_merge_set(abbreviations, app_replace_rule_set_integers_abbreviations());
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
