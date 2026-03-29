import { app_replace_rule_set_decimals_abbreviations } from "../../../love/public/src/app_replace_rule_set_decimals_abbreviations.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_decimals_rules } from "../../../love/public/src/app_replace_rule_set_decimals_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_scientific_notation_numbers() {
  const rules = app_replace_rule_set_decimals_rules();
  list_add_multiple(rules, [
    "sn > de se",
    "sn > ig se",
    "se > eE ex",
    "eE > e",
    "eE > E",
    "ex > + ig",
    "ex > - ig",
    "ex > ig",
  ]);
  let ad = app_replace_rule_set_decimals_abbreviations();
  let abbreviations = {
    eE: ['lowercase or uppercase letter "', "e", '" for "', "e", 'xponent"'],
    ex: ["", "ex", "ponent"],
    se: ["", "s", "cientific notation number ", "e", "nding"],
    sn: ["", "s", "cientific ", "n", "otation number"],
  };
  object_merge(abbreviations, ad);
  let r = {
    name: "Scientific Notation Numbers",
    abbreviations,
    rules,
    goals: [
      {
        start: "sn",
        end: "in . e di",
      },
      {
        start: "in . e di",
        end: "0 . e 1",
      },
      {
        start: "sn",
        end: "in . E + ig",
      },
      {
        start: "in . E + ig",
        end: "2 . E + di di",
      },
      {
        start: "2 . E + di di",
        end: "2 . E + 3 9",
      },
      {
        start: "sn",
        end: ". di e - ig",
      },
      {
        start: ". di e - ig",
        end: ". di e - di di",
      },
      {
        start: ". di e - di di",
        end: ". 5 e - 1 8",
      },
      {
        start: "sn",
        end: "in . ig E di",
      },
      {
        start: "in . ig E di",
        end: "in . di di E 0",
      },
      {
        start: "in . di di E 0",
        end: "3 . 1 di E 0",
      },
      {
        start: "3 . 1 di E 0",
        end: "3 . 1 4 E 0",
      },
      {
        start: "sn",
        end: "pi ig e ig",
      },
      {
        start: "pi ig e ig",
        end: "pi di e di di di di",
      },
      {
        start: "pi di e di di di di",
        end: "7 7 e di di di di",
      },
      {
        start: "7 7 e di di di di",
        end: "7 7 e 4 6 di di",
      },
      {
        start: "7 7 e 4 6 di di",
        end: "7 7 e 4 6 0 7",
      },
    ],
    why: "The replacement rules define a grammar for parsing and generating numbers in scientific notation, including integers, decimals, and exponent parts with optional signs, demonstrating how such numbers are constructed from digits and symbols according to standard scientific notation conventions.",
    rules_used: [
      [
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["eE"],
          right: ["E"],
          original: "eE > E",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
        {
          left: ["ex"],
          right: ["+", "ig"],
          original: "ex > + ig",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
      ],
      [
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
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
        {
          left: ["pi"],
          right: ["2"],
          original: "pi > 2",
        },
      ],
      [
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
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
      ],
      [
        {
          left: ["de"],
          right: [".", "ig"],
          original: "de > . ig",
        },
        {
          left: ["ex"],
          right: ["-", "ig"],
          original: "ex > - ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
      ],
      [
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
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
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
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
      ],
      [
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
        {
          left: ["eE"],
          right: ["E"],
          original: "eE > E",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
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
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["sn"],
          right: ["ig", "se"],
          original: "sn > ig se",
        },
      ],
      [
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["sn"],
          right: ["ig", "se"],
          original: "sn > ig se",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
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
          left: ["ex"],
          right: ["-", "ig"],
          original: "ex > - ig",
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
          right: ["1"],
          original: "pi > 1",
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
          right: ["6"],
          original: "pi > 6",
        },
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
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
