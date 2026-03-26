import { app_replace_rule_set_expressions_member_and_access_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_abbreviations.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_member_and_access() {
  const rules = [];
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_expressions_member_and_access_abbreviations(
    abbreviations,
  );
  list_add(rules, "ex > mae");
  let r = {
    name: "Expressions Member And Access",
    rules: rules,
    goals: [
      {
        start: "mae",
        end: "in",
      },
      {
        start: "mae",
        end: "id . id",
      },
      {
        start: "mae",
        end: "( ex ) . id",
      },
      {
        start: "( ex ) . id",
        end: "( id . id ) . id",
      },
      {
        start: "mae . id",
        end: "id . id . id",
      },
      {
        start: "mae",
        end: "id [ pe ]",
      },
      {
        start: "mae",
        end: 'id [ " l u v " ]',
      },
      {
        start: "mae",
        end: "mae [ 1 ]",
      },
      {
        start: "mae [ 1 ]",
        end: "mae [ 2 ] [ 1 ]",
      },
    ],
    why: "These replacement rules define a grammar for parsing member access and indexing expressions, similar to those found in programming languages like JavaScript or Python. The rules demonstrate how identifiers, literals (numbers, strings, booleans, null), and parenthesized expressions can be accessed via dot notation (object.property) or bracket notation (object[index]), supporting nested and chained accesses. This showcases the structure of expressions involving property and element access.",
  };
  return r;
}
