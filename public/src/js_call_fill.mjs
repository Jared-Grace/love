import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { data_functions_get } from "../../../love/public/src/data_functions_get.mjs";
import { js_function_last_asyncify } from "../../../love/public/src/js_function_last_asyncify.mjs";
import { js_visit_type_each_async } from "../../../love/public/src/js_visit_type_each_async.mjs";
import { functions_names_includes } from "../../../love/public/src/functions_names_includes.mjs";
import { js_call_new } from "../../../love/public/src/js_call_new.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
export async function js_call_fill(ast) {
  let functions = await data_functions_get();
  let visited = [];
  async function lambda(v) {
    let stack = object_property_get(v, "stack");
    let node = object_property_get(v, "node");
    let expression = object_property_get(node, "expression");
    if (js_identifier_is(expression)) {
      let name = object_property_get(expression, "name");
      let unaliased = await function_name_unalias_only(name);
      const valid = await functions_names_includes(unaliased);
      if (valid) {
        let v3 = await js_call_new(unaliased, ast);
        let async_is = object_property_get(v3, "async_is");
        let parsed = object_property_get(v3, "parsed");
        object_replace(node, parsed);
        await js_function_last_asyncify(
          stack,
          async_is,
          ast,
          functions,
          visited,
        );
      }
    }
  }
  await js_visit_type_each_async(ast, "ExpressionStatement", lambda);
  return;
}
