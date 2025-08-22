import { js_await } from "./js_await.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_node_type_not_is_if } from "./js_node_type_not_is_if.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { data_functions_get } from "./data_functions_get.mjs";
import { js_call_function_if } from "./js_call_function_if.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { marker } from "./marker.mjs";
export async function js_await_add(ast) {
  let functions = await data_functions_get();
  async function lambda(v) {
    let node = object_property_get(v, "node");
    async function lambda3(name) {
      let en = object_property_exists_not(functions, name);
      if (en) {
        return;
      }
      let f = object_property_get(functions, name);
      let async_is = object_property_get(f, "async");
      let stack = object_property_get(v, "stack");
      js_function_last_asyncify(stack, async_is);
      let stack1 = list_get_end_1(stack);
      function lambda4() {
        let copy = object_copy(node);
        let awaited = js_await(copy);
        marker("1");
      }
      js_node_type_not_is_if(stack1, "AwaitExpression", lambda4);
    }
    await js_call_function_if(node, lambda3);
  }
  await js_visit_type_each_async(ast, "CallExpression", lambda);
}
