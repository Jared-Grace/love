import { js_string } from "../../../love/public/src/js_string.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_object_to_expression } from "../../../love/public/src/js_object_to_expression.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
import { js_property } from "../../../love/public/src/js_property.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_replace_rules_parse_left_right_only } from "../../../love/public/src/app_replace_rules_parse_left_right_only.mjs";
import { app_replace_rule_set_rules_used } from "../../../love/public/src/app_replace_rule_set_rules_used.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
export async function app_replace_rule_sets_fns_rules_used_generate() {
  async function lambda(a) {
    let name = property_get(a, "name");
    let rs = await function_run_args_none(name);
    log(app_replace_rule_sets_fns_rules_used_generate.name, {
      rs,
    });
    let rules = property_get(rs, "rules");
    let goals = property_get(rs, "goals");
    let rules_parsed = app_replace_rules_parse_left_right_only(rules);
    function lambda2(g) {
      let se = app_replace_start_end_get(g);
      let end = property_get(se, "end");
      let start = property_get(se, "start");
      let ru = app_replace_rule_set_rules_used(rules_parsed, start, end);
      return ru;
    }
    let rules_used = list_map(goals, lambda2);
    let item = property_get(a, "item");
    let properties = js_object_expression_properties(item);
    const p_name = "rules_used";
    let p_existing = js_object_expression_properties_find_key_named(
      item,
      p_name,
    );
    if (null_not_is(p_existing)) {
      list_remove(properties, p_existing);
    }
    let expression = js_object_to_expression(rules_used);
    let s = js_string(p_name);
    let p = js_property(s, expression);
    list_add(properties, p);
    log(app_replace_rule_sets_fns_rules_used_generate.name, {
      rules_used,
    });
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
