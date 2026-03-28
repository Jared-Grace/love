import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_member_and_access_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_abbreviations.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_member_and_access() {
  const rules = [];
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  list_add_multiple(rules, [
    "id > p r o p",
    "id > h u m a n",
    "id > n a m e",
    "id > l a s t",
    "id > b i r t h d a t e",
    "id > y e a r",
  ]);
  let abbreviations = {};
  app_replace_rule_set_expressions_member_and_access_abbreviations(
    abbreviations,
  );
  list_add(rules, "ex > mae");
  let r = {
    name: "Expressions Member And Access",
    rules: rules,
    abbreviations,
    goals: [
      {
        start: "mae",
        end: "in",
      },
      {
        start: "mae",
        end: "x . y",
      },
      {
        start: "mae",
        end: "( ex ) . p r o p",
      },
      {
        start: "( ex ) . id",
        end: "( id . id ) . id",
      },
      {
        start: "( id . id ) . id",
        end: "( h u m a n . n a m e ) . l a s t",
      },
      {
        start: "mae . id",
        end: "id . id . id",
      },
      {
        start: "id . id . id",
        end: "h u m a n . b i r t h d a t e . y e a r",
      },
      {
        start: "mae",
        end: "id [ pe ]",
      },
      {
        start: "id [ pe ]",
        end: 'id [ " l u v " ]',
      },
      {
        start: "mae",
        end: "mae [ pe ]",
      },
      {
        start: "mae [ pe ]",
        end: "mae [ 1 ]",
      },
      {
        start: "mae [ 1 ]",
        end: "mae [ pe ] [ 1 ]",
      },
      {
        start: "mae [ pe ] [ 1 ]",
        end: "mae [ 2 ] [ 1 ]",
      },
    ],
    why: "The replacement rules define a grammar for primary expressions and member access in a programming language, demonstrating how identifiers, literals, and parenthesized expressions can be accessed via dot or bracket notation, similar to object and array access in languages like JavaScript.",
  };
  return r;
}
