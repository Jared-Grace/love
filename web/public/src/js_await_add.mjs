import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { data_functions_get } from "./data_functions_get.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
import { js_call_function_if } from "./js_call_function_if.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { marker } from "./marker.mjs";
export async function js_await_add(ast) {
  let functions = await data_functions_get();
  let name = js_declaration_single_name(ast);
  let f = object_property_get(functions, name);
  async function lambda(v) {
    let node = object_property_get(v, "node");
    async function lambda3(name) {
      let en = object_property_exists_not(functions, name);
      if (en) {
        return;
      }
      let f = object_property_get(functions, name);
      let async_is = object_property_get(f, "async");
      marker("2");
      let stack = object_property_get(v, "stack");
      js_function_last_asyncify(stack, async_is);
      marker("1");
    }
    await js_call_function_if(node, lambda3);
  }
  await js_visit_type_each_async(ast, "CallExpression", lambda);
}
