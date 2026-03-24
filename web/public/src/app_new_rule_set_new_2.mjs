import { app_replace_rule_set_expressions_primary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_primary_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  ["me > pe", "me > me . id", "me > [ e ]"];
  app_replace_rule_set_expressions_primary_rules(rules);
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
