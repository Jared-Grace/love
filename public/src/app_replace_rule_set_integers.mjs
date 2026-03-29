import { app_replace_rule_set_integers_abbreviations } from "../../../love/public/src/app_replace_rule_set_integers_abbreviations.mjs";
import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_integers() {
  const rules = app_replace_rule_set_integers_rules();
  let abbreviations = app_replace_rule_set_integers_abbreviations();
  let r = {
    name: "Integers",
    abbreviations,
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
    why: "The replacement rules define a context-free grammar for non-negative integers, allowing for the generation of single-digit and multi-digit numbers by recursively combining digits, with special handling for leading digits to avoid leading zeros except for the number zero itself.",
    rules_used: [
      [
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
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
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
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
      ],
      [
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
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
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
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
          right: ["9"],
          original: "pi > 9",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
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
          right: ["6"],
          original: "pi > 6",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
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
      ],
    ],
  };
  return r;
}
