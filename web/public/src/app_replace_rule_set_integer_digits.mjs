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
        end: "5 4",
      },
      {
        start: "g",
        end: "8 9",
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
    why: "These replacement rules define a context-free grammar for generating sequences of decimal digits, representing integers. The rules show how a nonterminal symbol for a digit ('di') can be replaced by any single digit from 0 to 9, and how a 'g' (grower) can recursively generate sequences of digits by expanding into one or more digits. This demonstrates how integers can be constructed from sequences of digits using simple production rules.",
  };
  return r;
}
