import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_call_args } from "../../../love/public/src/js_call_args.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_identifier_named_try } from "../../../love/public/src/js_identifier_named_try.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
import { list_single_item } from "../../../love/public/src/list_single_item.mjs";
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
      let key = "key";
      let identifier_name = "app_fn";
      let filter = function lambda4(item3) {
        let i = property_get(item3, key);
        let r2 = js_identifier_named_try(i, identifier_name);
        return r2;
      };
      let item2 = list_find(properties, filter);
      const value = "value";
      let v2 = property_get(item2, value);
      let name2 = js_identifier_name(v2);
      let code_string = js_code_string(name2);
      let r3 = list_single_item(name2);
      let parsed = js_call_args(fn_name.name, r3);
      property_set(item2, value, r3);
    }
    js_visit_type(ast, "ObjectExpression", lambda2);
  }
  let output = await function_transform_fn(app_index_main_fns, lambda);
}
