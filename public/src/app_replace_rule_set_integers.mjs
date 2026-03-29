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
          left: ["pi"],
          right: ["9"],
        },
        {
          left: ["in"],
          right: ["di"],
        },
        {
          left: ["di"],
          right: ["0"],
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
      ],
      [
        {
          left: ["pi"],
          right: ["3"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
        {
          left: ["ig"],
          right: ["di"],
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
        },
        {
          left: ["pi"],
          right: ["1"],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
        {
          left: ["ig"],
          right: ["di"],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["4"],
        },
        {
          left: ["ig"],
          right: ["di"],
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
        },
        {
          left: ["di"],
          right: ["0"],
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["9"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
        {
          left: ["pi"],
          right: ["6"],
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["6"],
        },
        {
          left: ["pi"],
          right: ["5"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
      ],
      [
        {
          left: ["pi"],
          right: ["8"],
        },
        {
          left: ["pi"],
          right: ["7"],
        },
        {
          left: ["di"],
          right: ["pi"],
        },
      ],
    ],
  };
  return r;
}
