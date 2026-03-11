import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_scientific_notation_numbers() {
  const rules = app_replace_rule_set_decimals_rules();
  list_add_multiple(rules, [
    "sn > i se",
    "sn > g se",
    "se > eE ex",
    "eE > e",
    "eE > E",
    "ex > + i",
    "ex > - i",
    "ex > i",
  ]);
  let a = {
    di: ["", "de", "cimal number"],
    di: ["", "di", "git (numbers 0-9)"],
    eE: ['lowercase or uppercase letter "', "e", '" for "', "e", 'xponent"'],
    ex: ["ex", "ponent"],
    g: ["integer ", "g", "rower"],
    i: ["", "i", "nteger (non-negative whole number)"],
    p: ["", "p", "ositive digit"],
    se: ["", "s", "cientific notation number", "e", "nding"],
    sn: ["", "s", "cientific ", "n", "otation number"],
  };
  let r = {
    name: "Scientific Notation Numbers",
    abbreviations: a,
    rules,
    goals: [
      {
        start: "sn",
        end: "0 . e 1",
      },
      {
        start: "sn",
        end: "2 . E + 3 9",
      },
      {
        start: "sn",
        end: ". 5 e - 1 8",
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
