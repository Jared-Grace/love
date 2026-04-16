import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { js_return_argument_get } from "../../../love/public/src/js_return_argument_get.mjs";
export function js_return_argument_identifier_is_if(node, lambda) {
  let argument = js_return_argument_get(node);
  function lambda2() {
    lambda(argument);
  }
  js_identifier_is_if(argument, lambda2);
  return argument;
}
