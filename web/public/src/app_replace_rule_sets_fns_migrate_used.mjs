import { null_is } from "../../../love/public/src/null_is.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
export async function app_replace_rule_sets_fns_migrate_used() {
  function lambda(a) {
    let item = property_get(a, "item");
    let p = "goals";
    let goals = js_object_expression_properties_find_key_named(item, p);
    if (null_is(goals)) {
      return;
    }
    const t = goals.value.type;
    if (equal_not(t, "ArrayExpression")) {
      log(app_replace_rule_sets_fns_migrate_used.name, {
        goals: t,
      });
    }
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
