import { js_visit_type_each_async } from "../../../love/public/src/js_visit_type_each_async.mjs";
import { js_call_function_if } from "../../../love/public/src/js_call_function_if.mjs";
import { js_node_type_not_is_if } from "../../../love/public/src/js_node_type_not_is_if.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_await } from "../../../love/public/src/js_await.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_function_last_asyncify } from "../../../love/public/src/js_function_last_asyncify.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function js_await_add_inner(functions, ast, visited) {
  async function lambda(v) {
    let node = object_property_get(v, "node");
    async function lambda3(name) {
      let en = property_exists_not(functions, name);
      if (en) {
        return;
      }
      let f = object_property_get(functions, name);
      let async_is = object_property_get(f, "async");
      let n = not(async_is);
      if (n) {
        return;
      }
      let stack = object_property_get(v, "stack");
      await js_function_last_asyncify(stack, async_is, ast, functions, visited);
      let stack1 = list_get_end_1(stack);
      function lambda4() {
        let copy = object_copy(node);
        let awaited = js_await(copy);
        object_replace(node, awaited);
      }
      js_node_type_not_is_if(stack1, "AwaitExpression", lambda4);
    }
    await js_call_function_if(node, lambda3);
  }
  await js_visit_type_each_async(ast, "CallExpression", lambda);
  return;
}
