import { app_replace_rule_set_decimals_abbreviations } from "../../../love/public/src/app_replace_rule_set_decimals_abbreviations.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_scientific_notation_numbers() {
  const rules = app_replace_rule_set_decimals_rules();
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
  object_merge(abbreviations, ad);
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
      {
        start: "sn",
        end: "in . e ig",
      },
      {
        start: "in e ig",
        end: "pi di e ig",
      },
      {
        start: "pi di e ig",
        end: "pi di e di di di di",
      },
      {
        start: "pi di e di di di di",
        end: "7 7 e di di di di",
      },
      {
        start: "7 7 e di di di di",
        end: "7 7 e 4 6 di di",
      },
      {
        start: "7 7 e 4 6 di di",
        end: "7 7 e 4 6 0 7",
      },
    ],
    why: "These replacement rules define a context-free grammar for generating and parsing numbers in scientific notation, such as '3.14E0' or '0.5e-18'. The grammar demonstrates how to construct valid scientific notation numbers by combining integers, decimals, and exponent parts (with optional '+' or '-' signs), and it distinguishes between digits, positive digits, and the structure of exponents. The rules show the step-by-step derivation of scientific notation numbers from basic digits, illustrating the hierarchical structure of such numbers.",
  };
  return r;
}
