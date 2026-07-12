import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { property_get } from "./property_get.mjs";
export function js_await_if_unwrap(expression) {
  let async_is = false;
  let argument = expression;
  function lambda() {
    async_is = true;
    argument = property_get(expression, "argument");
  }
  js_node_type_is_if(expression, "AwaitExpression", lambda);
  let r = {
    async_is,
    argument,
  };
  return r;
}
