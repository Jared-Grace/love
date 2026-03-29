import { each } from "../../../love/public/src/each.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { js_list_nodes_object_expression } from "../../../love/public/src/js_list_nodes_object_expression.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { functions_transform_list } from "../../../love/public/src/functions_transform_list.mjs";
import { list_map_name } from "../../../love/public/src/list_map_name.mjs";
import { app_replace_rule_sets_fns_names } from "../../../love/public/src/app_replace_rule_sets_fns_names.mjs";
export async function app_replace_rule_sets_fns_transform(on_result) {
  let fns = app_replace_rule_sets_fns_names();
  let result = list_map_name(fns);
  async function lambda3(ast) {
    let name = js_flo_name(ast);
    log(app_replace_rule_sets_fns_transform.name, {
      name,
    });
    let list = js_list_nodes_object_expression(ast);
    function lambda_each(item) {
      let p = "name";
      let name = js_object_expression_properties_find_key_named(item, p);
      if (null_is(name)) {
        return;
      }
      on_result(name);
    }
    each(list, lambda_each);
  }
  await functions_transform_list(result, lambda3);
  return result;
}
