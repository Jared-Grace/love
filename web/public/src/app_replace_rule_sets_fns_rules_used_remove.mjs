import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
export async function app_replace_rule_sets_fns_rules_used_remove() {
  async function lambda(a) {
    let name = property_get(a, "name");
    let rs = await function_run_args_none(name);
    log(app_replace_rule_sets_fns_rules_used_remove.name, {
      rs,
    });
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
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
