import { js_call_args_curried } from "../../../love/public/src/js_call_args_curried.mjs";
import { list_single_item } from "../../../love/public/src/list_single_item.mjs";
import { js_identifiers_to_names } from "../../../love/public/src/js_identifiers_to_names.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
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
      let mapped = list_map_property(properties, "key");
      let filtered = list_filter(mapped, js_identifier_is);
      let names = js_identifiers_to_names(filtered);
      let mapped3 = list_map(names, list_single_item);
      let r = js_call_args_curried(f_name);
      let mapped2 = list_map(mapped3, r);
      function lambda3(item) {}
      each(filtered, lambda3);
    }
    js_visit_type(ast, "ObjectExpression", lambda2);
  }
  let output = await function_transform_fn(app_index_main_fns, lambda);
}
