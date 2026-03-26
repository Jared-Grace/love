import { property_delete_if_exists } from "../../../love/public/src/property_delete_if_exists.mjs";
import { app_replace_rule_sets_why_generate_single_openai } from "../../../love/public/src/app_replace_rule_sets_why_generate_single_openai.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { property_change_list_map } from "../../../love/public/src/property_change_list_map.mjs";
import { app_replace_rules_parse_left_right_only } from "../../../love/public/src/app_replace_rules_parse_left_right_only.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
export async function app_replace_rule_sets_why_generate_single(rs) {
  let rule_set = property_get(rs, "rule_set");
  property_delete_if_exists(data, p);
  console.log(rule_set.rules);
  let value2 = property_change(
    rule_set,
    "rules",
    app_replace_rules_parse_left_right_only,
  );
  let value_changed = property_change_list_map(
    rule_set,
    "goals",
    app_replace_start_end_get,
  );
  let parsed = await app_replace_rule_sets_why_generate_single_openai(rule_set);
  return parsed;
}
