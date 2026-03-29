import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_replace_rules_parse_left_right_only } from "../../../love/public/src/app_replace_rules_parse_left_right_only.mjs";
import { app_replace_rule_set_rules_used } from "../../../love/public/src/app_replace_rule_set_rules_used.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
export async function app_replace_rule_sets_fns_migrate_used() {
  async function lambda(a) {
    let name = property_get(a, "name");
    log(app_replace_rule_sets_fns_migrate_used.name, {
      name,
    });
    let rs = await function_run_args_none(name);
    log(app_replace_rule_sets_fns_migrate_used.name, {
      rs,
    });
    let rules = property_get(rs, "rules");
    let goals = property_get(rs, "goals");
    let rules_parsed = app_replace_rules_parse_left_right_only(rules);
    function lambda2(item2) {}
    list_map(goals, lambda2);
    let rules_used = app_replace_rule_set_rules_used(rules_parsed, start, end);
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
