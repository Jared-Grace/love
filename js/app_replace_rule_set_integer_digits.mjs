import { app_replace_rule_set_add_rights } from "./app_replace_rule_set_add_rights.mjs";
import { digits } from "./digits.mjs";
export function app_replace_rule_set_integer_digits() {
  "the grower goes by ig here as it does in the integers exercise that follows, and not by the bare g, because the plain symbol games earlier in the course use g as a symbol standing for nothing - one short word cannot be a name in one exercise and a bare letter in another";
  let rules = ["ig > di ig", "ig > di"];
  let d = digits();
  app_replace_rule_set_add_rights(rules, "di", d);
  let r = {
    name: "Integer Digits",
    rules,
    goals: [
      {
        start: "ig",
        end: "0",
      },
      {
        start: "ig",
        end: "2",
      },
      {
        start: "ig",
        end: "0 3",
      },
      {
        start: "ig",
        end: "8 9",
      },
      {
        start: "ig",
        end: "di di di",
      },
      {
        start: "di di di",
        end: "7 7 7",
      },
      {
        start: "di di di",
        end: "6 5 4",
      },
      {
        start: "di di ig",
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
    why: "The replacement rules define a grammar for generating sequences of decimal digits (0-9), representing integers of arbitrary length, by recursively expanding a nonterminal into one or more digits.",
  };
  return r;
}
