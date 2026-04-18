import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_await_if_unwrap(expression) {
  let async_is = false;
  let call = expression;
  function lambda3() {
    async_is = true;
    call = property_get(expression, "argument");
  }
  js_node_type_is_if(expression, "AwaitExpression", lambda3);
  let r2 = {
    async_is,
    call,
  };
  return r2;
}
