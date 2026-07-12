import { js_call_arg_from_code } from "./js_call_arg_from_code.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { property_set } from "./property_set.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { js_identifier_named_try } from "./js_identifier_named_try.mjs";
import { list_find } from "./list_find.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { function_transform_fn } from "./function_transform_fn.mjs";
import { app_index_main_fns } from "./app_index_main_fns.mjs";
export async function app_index_main_fns_migrate() {
  async function lambda(ast) {
    function lambda2(v) {
      let node = property_get(v, "node");
      let properties = js_object_expression_properties(node);
      let key = "key";
      let identifier_name = "app_fn";
      let filter = function lambda4(item3) {
        let i = property_get(item3, key);
        let r = js_identifier_named_try(i, identifier_name);
        return r;
      };
      let item2 = list_find(properties, filter);
      let value = "value";
      let v2 = property_get(item2, value);
      let name = js_identifier_name(v2);
      let code_string = js_code_string(name);
      let parsed = js_call_arg_from_code(fn_name.name, code_string);
      property_set(item2, value, parsed);
    }
    js_visit_type(ast, "ObjectExpression", lambda2);
  }
  let output = await function_transform_fn(app_index_main_fns, lambda);
}
