import { app_replace_rule_set_decimals_abbreviations } from "../../../love/public/src/app_replace_rule_set_decimals_abbreviations.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_scientific_notation_numbers() {
  const rules = app_replace_rule_set_decimals_rules();
  list_add_multiple(rules, [
    "sn > de se",
    "sn > g se",
    "se > eE ex",
    "eE > e",
    "eE > E",
    "ex > + g",
    "ex > - g",
    "ex > g",
  ]);
  let ad = app_replace_rule_set_decimals_abbreviations();
  let abbreviations = {
    eE: ['lowercase or uppercase letter "', "e", '" for "', "e", 'xponent"'],
    ex: ["", "ex", "ponent"],
    se: ["", "s", "cientific notation number ", "e", "nding"],
    sn: ["", "s", "cientific ", "n", "otation number"],
  };
  object_merge(abbreviations, ad);
  let r = {
    name: "Scientific Notation Numbers",
    abbreviations,
    rules,
    goals: [
      {
        start: "sn",
        end: "i . e di",
      },
      {
        start: "i . e di",
        end: "0 . e 1",
      },
      {
        start: "sn",
        end: "i . E + g",
      },
      {
        start: "i . E + g",
        end: "2 . E + di di",
      },
      {
        start: "2 . E + di di",
        end: "2 . E + 3 9",
      },
      {
        start: "sn",
        end: ". di e - g",
      },
      {
        start: ". di e - g",
        end: ". di e - di di",
      },
      {
        start: ". di e - di di",
        end: ". 5 e - 1 8",
      },
      {
        start: "sn",
        end: "i . g E di",
      },
      {
        start: "i . g E di",
        end: "i . di di E 0",
      },
      {
        start: "sn",
        end: "3 . 1 4 E 0",
      },
      {
        start: "sn",
        end: "7 7 e 4 6 0 7",
      },
    ],
  };
  return r;
}
