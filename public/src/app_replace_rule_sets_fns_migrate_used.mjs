import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
export async function app_replace_rule_sets_fns_migrate_used() {
  async function lambda(a) {
    let item = property_get(a, "item");
    let p = "goals";
    let goals = js_object_expression_properties_find_key_named(item, p);
    if (null_is(goals)) {
      return;
    }
    let value = property_get(goals, "value");
    const t = value.type;
    if (equal_not(t, "ArrayExpression")) {
      return;
    }
    let name = property_get(a, "name");
    log(app_replace_rule_sets_fns_migrate_used.name, {
      name,
    });
    let rs = await function_run_args_none(name);
    log(app_replace_rule_sets_fns_migrate_used.name, {
      rs,
    });
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
