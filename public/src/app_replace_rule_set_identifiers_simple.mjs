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
          left: ["id"],
          right: ["idf"],
          original: "id > idf",
        },
        {
          left: ["idf"],
          right: ["_"],
          original: "idf > _",
        },
        {
          left: ["idf"],
          right: ["l"],
          original: "idf > l",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["idf"],
          right: ["l"],
          original: "idf > l",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["idf"],
          right: ["t"],
          original: "idf > t",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida", "idg"],
          original: "idg > ida idg",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["l"],
          original: "idf > l",
        },
        {
          left: ["idf"],
          right: ["v"],
          original: "idf > v",
        },
        {
          left: ["idf"],
          right: ["u"],
          original: "idf > u",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida", "idg"],
          original: "idg > ida idg",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["idf"],
          right: ["t"],
          original: "idf > t",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["A"],
          original: "idf > A",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["idf"],
          right: ["B"],
          original: "idf > B",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["idf"],
          right: ["t"],
          original: "idf > t",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["idf"],
          right: ["h"],
          original: "idf > h",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
      ],
    ],
  };
  return r;
}
