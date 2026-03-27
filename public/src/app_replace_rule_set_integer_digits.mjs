import { app_replace_rule_set_integers_abbreviations_di } from "../../../love/public/src/app_replace_rule_set_integers_abbreviations_di.mjs";
import { app_replace_rule_set_integer_digits_abbreviations } from "../../../love/public/src/app_replace_rule_set_integer_digits_abbreviations.mjs";
import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function app_replace_rule_set_integer_digits() {
  const rules = ["g > di g", "g > di"];
  let d = digits();
  app_replace_rule_set_add_rights(rules, "di", d);
  let abbreviations = app_replace_rule_set_integer_digits_abbreviations();
  app_replace_rule_set_integers_abbreviations_di(abbreviations);
  let r = {
    name: "Integer Digits",
    abbreviations,
    rules,
    goals: [
      {
        start: "g",
        end: "0",
      },
      {
        start: "g",
        end: "2",
      },
      {
        start: "g",
        end: "0 3",
      },
      {
        start: "g",
        end: "8 9",
      },
      {
        start: "g",
        end: "6 5 4",
      },
      {
        start: "g",
        end: "di di di",
      },
      {
        start: "di di di",
        end: "7 7 7",
      },
      {
        start: "di di g",
        end: "di di di di di",
      },
      {
        start: "di di di di di",
        end: "0 1 2 di di",
      },
      {
        start: "0 1 2 di di",
        end: "0 1 2 3 4",
      },
    ],
    why: "The replacement rules define a grammar for generating sequences of decimal digits (0-9), representing integers of arbitrary length, by recursively expanding nonterminals into single digits or further digit sequences.",
  };
  return r;
}
