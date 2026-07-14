import { app_replace_rule_set_decimals_abbreviations } from "./app_replace_rule_set_decimals_abbreviations.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_decimals_rules } from "./app_replace_rule_set_decimals_rules.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_rule_set_scientific_notation_numbers() {
  let rules = app_replace_rule_set_decimals_rules();
  list_add_multiple(rules, [
    "sn > de se",
    "sn > ig se",
    "se > eE ex",
    "eE > e",
    "eE > E",
    "ex > + ig",
    "ex > - ig",
    "ex > ig",
  ]);
  let ad = app_replace_rule_set_decimals_abbreviations();
  let abbreviations = {
    eE: ['lowercase or uppercase letter "', "e", '" for "', "e", 'xponent"'],
    ex: ["", "ex", "ponent"],
    se: ["", "s", "cientific notation number ", "e", "nding"],
    sn: ["", "s", "cientific ", "n", "otation number"],
  };
  object_merge_set(abbreviations, ad);
  let r = {
    name: "Scientific Notation Numbers",
    abbreviations,
    rules,
    goals: [
      {
        start: "sn",
        end: "in . e di",
      },
      {
        start: "in . e di",
        end: "0 . e 1",
      },
      {
        start: "sn",
        end: "in . E + ig",
      },
      {
        start: "in . E + ig",
        end: "2 . E + di di",
      },
      {
        start: "2 . E + di di",
        end: "2 . E + 3 9",
      },
      {
        start: "sn",
        end: ". di e - ig",
      },
      {
        start: ". di e - ig",
        end: ". di e - di di",
      },
      {
        start: ". di e - di di",
        end: ". 5 e - 1 8",
      },
      {
        start: "sn",
        end: "in . ig E di",
      },
      {
        start: "in . ig E di",
        end: "in . di di E 0",
      },
      {
        start: "in . di di E 0",
        end: "3 . 1 di E 0",
      },
      {
        start: "3 . 1 di E 0",
        end: "3 . 1 4 E 0",
      },
    ],
    why: "Now the mantissa in front of the exponent may itself be a decimal: the production 'sn > de se' is the single new idea here, since the exponent part with its e/E and optional sign was already learned in Exponent Part.",
  };
  return r;
}
