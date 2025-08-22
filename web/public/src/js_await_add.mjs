import { log } from "./log.mjs";
import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { data_functions_get } from "./data_functions_get.mjs";
import { js_call_function_if } from "./js_call_function_if.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { marker } from "./marker.mjs";
export async function js_await_add(ast) {
  let functions = await data_functions_get();
  marker("1");
  async function lambda(v) {
    let node = object_property_get(v, "node");
    async function lambda3(name) {
      let en = object_property_exists_not(functions, name);
      if (en) {
        return;
      }
      log("message");
      let f = object_property_get(functions, name);
      let async_is = object_property_get(f, "async");
      let stack = object_property_get(v, "stack");
      js_function_last_asyncify(stack, async_is);
    }
    await js_call_function_if(node, lambda3);
  }
  await js_visit_type_each_async(ast, "CallExpression", lambda);
}
