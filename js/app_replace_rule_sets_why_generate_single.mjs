import { properties_delete_if_exists } from "./properties_delete_if_exists.mjs";
import { app_replace_rule_sets_why_generate_single_openai } from "./app_replace_rule_sets_why_generate_single_openai.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { property_transform_list_map } from "./property_transform_list_map.mjs";
import { app_replace_rules_parse_left_right_only } from "./app_replace_rules_parse_left_right_only.mjs";
import { property_transform } from "./property_transform.mjs";
export async function app_replace_rule_sets_why_generate_single(rs) {
  let rule_set = property_get(rs, "rule_set");
  properties_delete_if_exists(rule_set, ["why", "rules_used"]);
  let value = property_transform(
    rule_set,
    "rules",
    app_replace_rules_parse_left_right_only,
  );
  let value_changed = property_transform_list_map(
    rule_set,
    "goals",
    app_replace_start_end_get,
  );
  let parsed = await app_replace_rule_sets_why_generate_single_openai(rule_set);
  return parsed;
}
