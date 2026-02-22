import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_identifier_named_try } from "../../../love/public/src/js_identifier_named_try.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
import { log_exit } from "../../../love/public/src/log_exit.mjs";
import { js_call_args_curried } from "../../../love/public/src/js_call_args_curried.mjs";
import { list_single_item } from "../../../love/public/src/list_single_item.mjs";
import { js_identifiers_to_names } from "../../../love/public/src/js_identifiers_to_names.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { app_index_main_fns } from "../../../love/public/src/app_index_main_fns.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function app_index_main_fns_migrate() {
  async function lambda(ast) {
    function lambda2(v) {
      let node = property_get(v, "node");
      let properties = js_object_expression_properties(node);
      let property_name_a = "key";
      let identifier_name = "app_fn";
      let filter = function lambda4(item3) {
        let i = property_get(item3, property_name_a);
        let r2 = js_identifier_named_try(i, identifier_name);
        return r2;
      };
      let item2 = list_find(properties, filter);
      let value = property_get(item2, "value");
      log_exit(value);
      let r3 = list_single_item(item4);
      let name2 = js_identifier_name(i2);
      let filtered = list_filter(mapped, js_identifier_is);
      let names = js_identifiers_to_names(filtered);
      let mapped3 = list_map(names, list_single_item);
      log(mapped3);
      let r = js_call_args_curried(fn_name.name);
      let mapped2 = list_map(mapped3, r);
      function lambda3(item) {
        log(item);
      }
      each(mapped2, lambda3);
    }
    js_visit_type(ast, "ObjectExpression", lambda2);
  }
  let output = await function_transform_fn(app_index_main_fns, lambda);
}
