import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
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
      let mapped = list_map_property(list, property_name);
      function lambda4(item2) {
        let key = property_get(item2, "key");
        let ii = js_identifier_is(key);
        return ii;
      }
      let filtered = list_filter(properties, lambda4);
      function lambda3(item) {
        log(item);
      }
      each(filtered, lambda3);
    }
    js_visit_type(ast, "ObjectExpression", lambda2);
  }
  let output = await function_transform_fn(app_index_main_fns, lambda);
}
