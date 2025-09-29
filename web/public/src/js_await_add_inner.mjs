import { list_add } from "./list_add.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { js_call_function_if } from "./js_call_function_if.mjs";
import { js_node_type_not_is_if } from "./js_node_type_not_is_if.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_await } from "./js_await.mjs";
import { object_copy } from "./object_copy.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { marker } from "./marker.mjs";
import { not } from "./not.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function js_await_add_inner(functions, ast, visited) {
  async function lambda(v) {
    let node = object_property_get(v, "node");
    async function lambda3(name) {
      let en = object_property_exists_not(functions, name);
      if (en) {
        return;
      }
      let f = object_property_get(functions, name);
      let async_is = object_property_get(f, "async");
      let n = not(async_is);
      if (n) {
        marker("1");
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
  let declaration = js_declaration_single(ast);
  let name = js_declaration_name(declaration);
  list_add(list, item);
}
