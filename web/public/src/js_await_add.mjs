import { object_property_exists } from "./object_property_exists.mjs";
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
  let async_is = object_property_get(f, "async");
  async function lambda(v) {
    let node = object_property_get(v, "node");
    async function lambda3(name) {
      marker("2");
      let result = object_property_exists(functions, property_name);
      if (false) {
      }
      let stack = object_property_get(v, "stack");
    }
    await js_call_function_if(node, lambda3);
  }
  marker("1");
  await js_visit_type_each_async(ast, "CallExpression", lambda);
}
