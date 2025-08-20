import { js_call_function_if } from "./js_call_function_if.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_await_add(ast) {
  async function lambda(v) {
    let stack = object_property_get(v, "stack");
    marker("1");
    async function lambda3() {}
    await js_call_function_if(node, lambda3);
  }
  js_visit_type(ast, "CallExpression", lambda);
}
