import { each_async } from "../../../love/public/src/each_async.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { js_list_nodes_object_expression } from "../../../love/public/src/js_list_nodes_object_expression.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { functions_transform_list } from "../../../love/public/src/functions_transform_list.mjs";
import { app_replace_rule_sets_fns_names } from "../../../love/public/src/app_replace_rule_sets_fns_names.mjs";
export async function app_replace_rule_sets_fns_transform(lambda$a) {
  let names = app_replace_rule_sets_fns_names();
  async function lambda3(ast) {
    let name = js_flo_name(ast);
    log(app_replace_rule_sets_fns_transform.name, {
      name,
    });
    let list = js_list_nodes_object_expression(ast);
    async function lambda_each(item) {
      let p = "name";
      let name_property = js_object_expression_properties_find_key_named(
        item,
        p,
      );
      if (null_is(name_property)) {
        return;
      }
      await lambda$a({
        name_property,
        item,
        name,
      });
    }
    await each_async(list, lambda_each);
  }
  await functions_transform_list(names, lambda3);
  return names;
}
