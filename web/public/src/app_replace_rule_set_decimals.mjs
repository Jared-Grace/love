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
          original: "di > 0",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["de"],
          right: [".", "ig"],
          original: "de > . ig",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["pi"],
          right: ["2"],
          original: "pi > 2",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
      ],
      [
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
      ],
      [
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["pi"],
          right: ["9"],
          original: "pi > 9",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
      ],
    ],
  };
  return r;
}
