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
    why: "The replacement rules define a context-free grammar for decimal numbers, including integers and numbers with fractional parts, by specifying how digits and decimal points can be combined to form valid decimal representations.",
    rules_used: [
      [
        {
          left: ["di"],
          right: ["0"],
        },
        {
          left: ["in"],
          right: ["di"],
        },
        {
          left: ["de"],
          right: ["in", "."],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["5"],
        },
        {
          left: ["ig"],
          right: ["di"],
        },
        {
          left: ["de"],
          right: [".", "ig"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
        },
        {
          left: ["pi"],
          right: ["2"],
        },
        {
          left: ["in"],
          right: ["di"],
        },
        {
          left: ["de"],
          right: ["in", "."],
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
        },
        {
          left: ["ig"],
          right: ["di"],
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
        },
        {
          left: ["pi"],
          right: ["1"],
        },
        {
          left: ["pi"],
          right: ["4"],
        },
        {
          left: ["pi"],
          right: ["3"],
        },
      ],
      [
        {
          left: ["de"],
          right: ["in", "."],
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
        },
        {
          left: ["ig"],
          right: ["di"],
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
        {
          left: ["pi"],
          right: ["9"],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["5"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
        {
          left: ["pi"],
          right: ["8"],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["6"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
        {
          left: ["pi"],
          right: ["7"],
        },
      ],
    ],
  };
  return r;
}
