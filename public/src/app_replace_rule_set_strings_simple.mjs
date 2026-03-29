import { app_replace_rule_set_strings_simple_abbreviation_st } from "../../../love/public/src/app_replace_rule_set_strings_simple_abbreviation_st.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_identifiers_simple_abbreviations } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_abbreviations.mjs";
import { text_pad_nested_space_quote_double } from "../../../love/public/src/text_pad_nested_space_quote_double.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_strings_simple_rules_base } from "../../../love/public/src/app_replace_rule_set_strings_simple_rules_base.mjs";
export function app_replace_rule_set_strings_simple() {
  let abbreviations = {};
  app_replace_rule_set_strings_simple_abbreviation_st(abbreviations);
  object_merge(abbreviations, {
    stg: ["", "st", "ring ", "g", "rower"],
  });
  app_replace_rule_set_identifiers_simple_abbreviations(abbreviations);
  const extra = app_replace_rule_set_strings_simple_rules_base();
  let character = "ida";
  const item = "stg";
  let quoted = text_pad_nested_space_quote_double(item);
  const rules = [
    "st > " + quoted,
    "stg > " + character,
    "stg > " + character + " stg",
  ];
  list_add_multiple(rules, extra);
  let r = {
    name: "Strings Simple",
    rules,
    goals: [
      {
        start: "st",
        end: '" ida "',
      },
      {
        start: '" ida "',
        end: '" _ "',
      },
      {
        start: "st",
        end: '" ida ida "',
      },
      {
        start: '" ida ida "',
        end: '" $ 1 "',
      },
      {
        start: '" ida ida "',
        end: '" t 3 "',
      },
      {
        start: '" ida ida ida "',
        end: '" l u v "',
      },
      {
        start: "st",
        end: '" ida ida ida "',
      },
      {
        start: "st",
        end: '" ida ida ida ida "',
      },
      {
        start: '" ida ida ida ida "',
        end: '" idf idf idf idf "',
      },
      {
        start: '" idf idf idf idf "',
        end: '" A B B A "',
      },
      {
        start: '" ida ida ida ida "',
        end: '" idf di idf idf "',
      },
      {
        start: '" idf di idf idf "',
        end: '" J 0 $ h "',
      },
    ],
    abbreviations,
    why: "The replacement rules define a grammar for simple string literals consisting of double quotes surrounding a sequence of identifier characters (letters, $, or _), possibly interleaved with a few digits (0, 1, 3), demonstrating how identifiers and digits can be combined to form the contents of quoted strings.",
    rules_used: [
      [
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["u"],
          original: "idf > u",
        },
        {
          left: ["idf"],
          right: ["_"],
          original: "idf > _",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
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
          right: ["v"],
          original: "idf > v",
        },
        {
          left: ["idf"],
          right: ["l"],
          original: "idf > l",
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
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
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
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["idf"],
          right: ["_"],
          original: "idf > _",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["B"],
          original: "idf > B",
        },
        {
          left: ["idf"],
          right: ["A"],
          original: "idf > A",
        },
        {
          left: ["idf"],
          right: ["_"],
          original: "idf > _",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["idf"],
          right: ["A"],
          original: "idf > A",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["idf"],
          right: ["h"],
          original: "idf > h",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
      ],
    ],
  };
  return r;
}
