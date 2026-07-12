import { list_remove } from "./list_remove.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_object_expression_properties_find_key_named } from "./js_object_expression_properties_find_key_named.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { function_run_args_none } from "./function_run_args_none.mjs";
import { log } from "./log.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "./app_replace_rule_sets_fns_transform.mjs";
export async function app_replace_rule_sets_fns_migrate_rules_used_remove() {
  async function lambda(a) {
    let name = property_get(a, "name");
    let rs = await function_run_args_none(name);
    log(app_replace_rule_sets_fns_migrate_rules_used_remove.name, {
      rs,
    });
    let item = property_get(a, "item");
    let properties = js_object_expression_properties(item);
    let p_name = "rules_used";
    let p_existing = js_object_expression_properties_find_key_named(
      item,
      p_name,
    );
    if (null_not_is(p_existing)) {
      list_remove(properties, p_existing);
    }
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
