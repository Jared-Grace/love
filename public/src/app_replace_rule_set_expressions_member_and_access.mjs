import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_primary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_primary_rules.mjs";
export function app_replace_rule_set_expressions_member_and_access() {
  const rules = [];
  list_add_multiple(rules, ["me > pe", "me > me . id", "me > [ e ]"]);
  app_replace_rule_set_expressions_primary_rules(rules);
  list_add(rules, "e > me");
  let r = {
    name: "Expressions member and access",
    rules: rules,
    goals: [
      {
        start: "me",
        end: "b",
      },
    ],
  };
  return r;
}
