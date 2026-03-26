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
  };
  return r;
}
