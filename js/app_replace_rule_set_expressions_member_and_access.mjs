import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_replace_rule_set_expressions_member_and_access_abbreviations } from "./app_replace_rule_set_expressions_member_and_access_abbreviations.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "./app_replace_rule_set_expressions_member_and_access_rules.mjs";
import { list_add } from "./list_add.mjs";
export function app_replace_rule_set_expressions_member_and_access() {
  let rules = [];
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  list_add_multiple(rules, [
    "id > prop",
    "id > human",
    "id > name",
    "id > last",
    "id > birthdate",
    "id > year",
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
        end: "( ex ) . prop",
      },
      {
        start: "( ex ) . id",
        end: "( id . id ) . id",
      },
      {
        start: "( id . id ) . id",
        end: "( human . name ) . last",
      },
      {
        start: "mae . id",
        end: "id . id . id",
      },
      {
        start: "id . id . id",
        end: "human . birthdate . year",
      },
      {
        start: "mae",
        end: "id [ pe ]",
      },
      {
        start: "id [ pe ]",
        end: 'id [ "luv" ]',
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
    why: "The replacement rules define a grammar for member access and indexing expressions (like object.property and object[index]) in a programming language, supporting nested property access, array-style indexing, and various literal and identifier forms, demonstrating how complex expressions are constructed from simpler components.",
  };
  return r;
}
