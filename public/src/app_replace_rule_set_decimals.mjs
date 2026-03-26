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
        end: "pi . di di",
      },
      {
        start: "pi . di di",
        end: "3 . 1 4",
      },
      {
        start: "pi . di ig",
        end: "pi . di di di di di",
      },
      {
        start: "pi . di di di di di",
        end: "7 . 7 di di di di",
      },
      {
        start: "7 7 . di di di di",
        end: "7 7 . 4 6 di di",
      },
      {
        start: "7 7 . 4 6 di di",
        end: "7 7 . 4 6 0 7",
      },
    ],
    why: "These replacement rules define a context-free grammar for generating decimal numbers, including both whole numbers and numbers with fractional parts. The rules specify how to construct integers and decimal numbers by combining digits, ensuring that numbers do not have leading zeros (except for '0' itself), and allowing for various decimal formats (e.g., '2.', '.5', '3.14'). The grammar demonstrates how to systematically build valid decimal representations from basic digit components.",
  };
  return r;
}
