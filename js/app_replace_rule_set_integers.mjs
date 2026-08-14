import { app_replace_rule_set_integers_rules } from "./app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_integers() {
  let rules = app_replace_rule_set_integers_rules();
  let r = {
    name: "Integers",
    rules,
    goals: [
      {
        start: "in",
        end: "0",
      },
      {
        start: "in",
        end: "2",
      },
      {
        start: "in",
        end: "1 3",
      },
      {
        start: "in",
        end: "7 7",
      },
      {
        start: "in",
        end: "4 0",
      },
      {
        start: "in",
        end: "pi di di",
      },
      {
        start: "pi di di",
        end: "9 6 9",
      },
      {
        start: "in",
        end: "pi di di di",
      },
      {
        start: "pi di di di",
        end: "5 6 di di",
      },
      {
        start: "5 6 di di",
        end: "5 6 7 8",
      },
    ],
    why: "The same digits as before, with one restriction added: a number of more than one digit cannot begin with 0. That is what pi is for - a first digit from 1 to 9.",
  };
  return r;
}
