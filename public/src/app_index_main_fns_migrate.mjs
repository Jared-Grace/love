import { log_unparse } from "../../../love/public/src/log_unparse.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { app_index_main_fns } from "../../../love/public/src/app_index_main_fns.mjs";
export async function app_index_main_fns_migrate() {
  async function lambda(ast) {
    function lambda2(v) {
      let node = property_get(v, "node");
      let properties = js_object_expression_properties(node);
      function lambda3(item) {
        log_unparse(node2);
      }
      each(list2, lambda3);
    }
    js_visit_type(ast, "ObjectExpression", lambda2);
  }
  let output = await function_transform_fn(app_index_main_fns, lambda);
}
