import { list_add_multiple } from "./list_add_multiple.mjs";
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
    why: "Two ways to reach inside something: a dot and a name, as in human.name, or square brackets, as in list[1]. Either can be done again on the result, so you can reach in and then reach in again.",
  };
  return r;
}
