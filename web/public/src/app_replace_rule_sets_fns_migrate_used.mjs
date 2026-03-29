import { function_run } from "../../../love/public/src/function_run.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
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
    let code = js_unparse(value);
    let expression = js_parse_expression(code);
    log(app_replace_rule_sets_fns_migrate_used.name, {
      expression,
    });
    let name = property_get(a, "name");
    let result2 = await function_run(f_name, args);
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
