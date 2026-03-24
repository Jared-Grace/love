import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_member_and_access() {
  const rules = [];
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  list_add(rules, "e > me");
  let r = {
    name: "Expressions member and access",
    rules: rules,
    goals: [
      {
        start: "me",
        end: "i",
      },
      {
        start: "me",
        end: "id . id",
      },
      {
        start: "me",
        end: "( e ) . id",
      },
      {
        start: "me",
        end: "( id . id ) . id",
      },
      {
        start: "me",
        end: "me . id . id",
      },
      {
        start: "me",
        end: "id . id . id",
      },
      {
        start: "me",
        end: "id [ pe ]",
      },
      {
        start: "me",
        end: "id [ i ]",
      },
      {
        start: "me",
        end: "( e ) . id",
      },
      {
        start: "me",
        end: "( id . id ) . id",
      },
      {
        start: "me",
        end: "me . id . id",
      },
      {
        start: "me",
        end: "id . id . id",
      },
    ],
  };
  return r;
}
