import { app_replace_rule_set_identifiers_simple_abbreviations } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_abbreviations.mjs";
import { app_replace_rule_set_identifiers_simple_rules } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_rules.mjs";
export function app_replace_rule_set_identifiers_simple() {
  let abbreviations = {
    idg: ["", "id", "entifier ", "g", "rower"],
  };
  app_replace_rule_set_identifiers_simple_abbreviations(abbreviations);
  let r = {
    name: "Identifiers Simple",
    rules: app_replace_rule_set_identifiers_simple_rules(),
    goals: [
      {
        start: "id",
        end: "_",
      },
      {
        start: "id",
        end: "idf ida",
      },
      {
        start: "idf ida",
        end: "$ 1",
      },
      {
        start: "id",
        end: "t 3",
      },
      {
        start: "id",
        end: "idf ida ida",
      },
      {
        start: "idf ida ida",
        end: "l u v",
      },
      {
        start: "id",
        end: "idf ida ida ida",
      },
      {
        start: "idf ida ida ida",
        end: "idf idf idf idf",
      },
      {
        start: "idf idf idf idf",
        end: "A B B A",
      },
      {
        start: "idf ida ida ida",
        end: "idf di idf idf",
      },
      {
        start: "idf di idf idf",
        end: "J 0 $ h",
      },
    ],
    abbreviations,
    why: "The replacement rules define a context-free grammar for a simplified identifier system, where identifiers can start with certain letters or symbols and may include a limited set of digits and additional characters, demonstrating how identifiers are constructed from allowed starting and subsequent characters.",
    rules_used: [
      [
        {
          left: ["idf"],
          right: ["_"],
        },
        {
          left: ["id"],
          right: ["idf"],
        },
        {
          left: ["ida"],
          right: ["di"],
        },
      ],
      [
        {
          left: ["idf"],
          right: ["B"],
        },
        {
          left: ["idg"],
          right: ["ida"],
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
        },
      ],
      [
        {
          left: ["ida"],
          right: ["di"],
        },
        {
          left: ["di"],
          right: ["1"],
        },
        {
          left: ["idf"],
          right: ["$"],
        },
      ],
      [
        {
          left: ["ida"],
          right: ["di"],
        },
        {
          left: ["idf"],
          right: ["t"],
        },
        {
          left: ["idg"],
          right: ["ida"],
        },
        {
          left: ["di"],
          right: ["3"],
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["idf", "idg"],
        },
        {
          left: ["idg"],
          right: ["ida"],
        },
        {
          left: ["idg"],
          right: ["ida", "idg"],
        },
      ],
      [
        {
          left: ["idf"],
          right: ["v"],
        },
        {
          left: ["idf"],
          right: ["u"],
        },
        {
          left: ["idf"],
          right: ["l"],
        },
        {
          left: ["ida"],
          right: ["idf"],
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida", "idg"],
        },
        {
          left: ["idg"],
          right: ["ida"],
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
        },
        {
          left: ["di"],
          right: ["3"],
        },
        {
          left: ["di"],
          right: ["0"],
        },
      ],
      [
        {
          left: ["idf"],
          right: ["B"],
        },
        {
          left: ["idf"],
          right: ["A"],
        },
        {
          left: ["idf"],
          right: ["$"],
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
        },
        {
          left: ["ida"],
          right: ["di"],
        },
        {
          left: ["idf"],
          right: ["B"],
        },
      ],
      [
        {
          left: ["idf"],
          right: ["h"],
        },
        {
          left: ["di"],
          right: ["0"],
        },
        {
          left: ["idf"],
          right: ["J"],
        },
        {
          left: ["idf"],
          right: ["$"],
        },
      ],
    ],
  };
  return r;
}
