import { app_replace_rule_set_decimals_abbreviations } from "../../../love/public/src/app_replace_rule_set_decimals_abbreviations.mjs";
import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
export function app_replace_rule_set_decimals() {
  const rules = app_replace_rule_set_decimals_rules();
  let abbreviations = app_replace_rule_set_decimals_abbreviations();
  let r = {
    name: "Decimals",
    abbreviations,
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
        end: "3.14",
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
    why: "The replacement rules define a context-free grammar for decimal numbers, including integers and numbers with fractional parts, by specifying how digits and decimal points can be combined to form valid decimal representations.",
  };
  return r;
}
