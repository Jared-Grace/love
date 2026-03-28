import { app_replace_rule_set_expressions_primary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_primary_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_expressions_member_and_access_rules(
  rules,
) {
  app_replace_rule_set_expressions_primary_rules(rules);
  list_add_multiple(rules, [
    "mae > pe",
    "mae > mae . id",
    "mae > mae [ ex ]",
    "id > p r o p",
    "id > h u m a n",
    "id > n a m e",
    "id > l a s t",
    "id > b i r t h d a t e",
    "id > y e a r",
    "id > f n",
    "id > u p d a t e",
    "id > p a g e",
  ]);
}
