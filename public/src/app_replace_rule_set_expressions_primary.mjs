import { app_replace_rule_set_expressions_primary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_primary_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_strings_simple_abbreviation_st } from "../../../love/public/src/app_replace_rule_set_strings_simple_abbreviation_st.mjs";
import { app_replace_rule_set_integers_abbreviation_i } from "../../../love/public/src/app_replace_rule_set_integers_abbreviation_i.mjs";
import { app_replace_rule_set_decimals_abbreviation_de } from "../../../love/public/src/app_replace_rule_set_decimals_abbreviation_de.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_boolean_literal_abbreviations } from "../../../love/public/src/app_replace_rule_set_boolean_literal_abbreviations.mjs";
export function app_replace_rule_set_expressions_primary() {
  const rules = [];
  app_replace_rule_set_expressions_primary_rules(rules);
  list_add(rules, "e > pe");
  let abbreviations = {
    pe: ["", "p", "rimary ", "e", "xpression"],
    id: ["", "id", "entifier"],
    li: ["", "li", "teral"],
    e: ["", "e", "xpression"],
    n: ["", "n", "umber"],
  };
  app_replace_rule_set_integers_abbreviation_i(abbreviations);
  app_replace_rule_set_strings_simple_abbreviation_st(abbreviations);
  let b = app_replace_rule_set_boolean_literal_abbreviations();
  let to2 = object_merge(abbreviations, b);
  let ab = app_replace_rule_set_decimals_abbreviation_de(abbreviations);
  let r = {
    name: "Expressions primary",
    abbreviations,
    rules: rules,
    goals: [
      {
        start: "pe",
        end: "id",
      },
      {
        start: "pe",
        end: "true",
      },
      {
        start: "pe",
        end: "false",
      },
      {
        start: "pe",
        end: "i",
      },
      {
        start: "pe",
        end: "de",
      },
      {
        start: "pe",
        end: "st",
      },
      {
        start: "pe",
        end: "null",
      },
      {
        start: "pe",
        end: "( e )",
      },
      {
        start: "pe",
        end: "( pe )",
      },
      {
        start: "pe",
        end: "( id )",
      },
      {
        start: "pe",
        end: "( ( e ) )",
      },
    ],
  };
  return r;
}
