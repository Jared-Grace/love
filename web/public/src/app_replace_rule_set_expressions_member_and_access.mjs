import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_member_and_access_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_abbreviations.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_member_and_access() {
  const rules = [];
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
        end: 'id [ " luv " ]',
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
    why: "The replacement rules define a grammar for parsing member access and property access expressions (such as object.property and object[index]) in a programming language, including identifiers, literals, and nested access, demonstrating how complex expressions are built from simpler components.",
  };
  return r;
}
