import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
export async function app_replace_rule_sets_fns_migrate_used() {
  function lambda(a) {
    let item = property_get(a, "item");
    let p = "goals";
    let goals = js_object_expression_properties_find_key_named(item, p);
    let mapped = list_map_property(list, property_name);
    log(app_replace_rule_sets_fns_migrate_used.name, {
      goals,
    });
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
