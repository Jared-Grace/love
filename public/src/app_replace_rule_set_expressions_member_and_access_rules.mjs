import { app_replace_rule_set_expressions_primary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_primary_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_expressions_member_and_access_rules(
  rules,
) {
  app_replace_rule_set_expressions_primary_rules(rules);
  list_add_multiple(rules, [
    "mae > pe",
    "mae > mle",
    "mle > mae . id",
    "mle > mae [ ex ]",
  ]);
}
