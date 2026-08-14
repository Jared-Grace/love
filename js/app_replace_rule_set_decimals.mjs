import { app_replace_rule_set_decimals_rules } from "./app_replace_rule_set_decimals_rules.mjs";
export function app_replace_rule_set_decimals() {
  let rules = app_replace_rule_set_decimals_rules();
  let r = {
    name: "Decimals",
    rules,
    goals: [
      {
        start: "de",
        end: "0 .",
      },
      {
        start: "de",
        end: ". 5",
      },
      {
        start: "de",
        end: "2 .",
      },
      {
        start: "de",
        end: "in . di di",
      },
      {
        start: "pi . di di",
        end: "3 . 1 4",
      },
      {
        start: "de",
        end: "pi ig . ig",
      },
      {
        start: "pi ig . di ig",
        end: "pi di . di di di di",
      },
      {
        start: "pi di . di di di di",
        end: "7 9 . di di di di",
      },
      {
        start: "7 9 . di di di di",
        end: "7 9 . 5 8 di di",
      },
      {
        start: "7 9 . 5 8 di di",
        end: "7 9 . 5 8 6 7",
      },
    ],
    why: "A decimal is a whole number, then a dot, then more digits. The whole of the last exercise is reused unchanged; the dot and what follows it are the only new part.",
  };
  return r;
}
