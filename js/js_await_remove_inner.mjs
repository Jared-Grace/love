import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { js_call_function_if } from "./js_call_function_if.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_function_last_deasyncify } from "./js_function_last_deasyncify.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_get } from "./property_get.mjs";
export async function js_await_remove_inner(functions, ast, visited) {
  async function lambda(v) {
    let node = property_get(v, "node");
    let argument = property_get(node, "argument");
    async function lambda3(name) {
      let en = property_exists_not(functions, name);
      if (en) {
        return;
      }
      let f = property_get(functions, name);
      let async_is = property_get(f, "async");
      if (async_is) {
        return;
      }
      let stack = property_get(v, "stack");
      object_replace(node, argument);
      await js_function_last_deasyncify(stack, ast, functions, visited);
    }
    await js_call_function_if(argument, lambda3);
  }
  await js_visit_type_each_async(ast, "AwaitExpression", lambda);
  return;
}
