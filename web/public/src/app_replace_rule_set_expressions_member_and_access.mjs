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
  list_add(rules, "e > mae");
  let r = {
    name: "Expressions member and access",
    rules: rules,
    goals: [
      {
        start: "mae",
        end: "i",
      },
      {
        start: "mae",
        end: "id . id",
      },
      {
        start: "mae",
        end: "( e ) . id",
      },
      {
        start: "( e ) . id",
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
  };
  return r;
}
