import { js_call_function_if } from "./js_call_function_if.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_await_add(ast) {
  async function lambda(v) {
    marker("1");
    let stack = object_property_get(v, "stack");
    let node = object_property_get(v, "node");
    async function lambda3() {
      marker("2");
    }
    await js_call_function_if(node, lambda3);
  }
  js_visit_type(ast, "CallExpression", lambda);
}
