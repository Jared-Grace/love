import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_function_calls_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_abbreviations.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_member_and_access() {
  const rules = [];
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_expressions_function_calls_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ce: ["", "m", "ember ", "e", "xpression"],
  });
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
        start: "( e ) . id",
        end: "( id . id ) . id",
      },
      {
        start: "me . id",
        end: "id . id . id",
      },
      {
        start: "me",
        end: "id [ pe ]",
      },
      {
        start: "me",
        end: "id [ st ]",
      },
      {
        start: "me",
        end: "me [ i ]",
      },
      {
        start: "me [ i ]",
        end: "me [ i ] [ i ]",
      },
    ],
  };
  return r;
}
