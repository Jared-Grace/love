import { each_async } from "./each_async.mjs";
import { null_is } from "./null_is.mjs";
import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
import { js_list_nodes_object_expression } from "./js_list_nodes_object_expression.mjs";
import { log } from "./log.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
export async function app_replace_rule_sets_fns_transform_lambda(
  ast,
  lambda$a,
) {
  let name = js_flo_name(ast);
  log(app_replace_rule_sets_fns_transform_lambda.name, {
    name,
  });
  let list = js_list_nodes_object_expression(ast);
  async function lambda_each(item) {
    let p = "name";
    let name_property = js_object_expression_property_named_or_null(item, p);
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
