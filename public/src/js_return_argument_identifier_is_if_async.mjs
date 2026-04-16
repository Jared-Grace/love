import { js_identifier_is_if_async } from "../../../love/public/src/js_identifier_is_if_async.mjs";
import { js_return_argument_get } from "../../../love/public/src/js_return_argument_get.mjs";
export async function js_return_argument_identifier_is_if_async(node, lambda) {
  let argument = js_return_argument_get(node);
  function lambda2() {
    lambda(argument);
  }
  js_identifier_is_if_async(argument, lambda2);
  return argument;
  async function lambda4() {}
  await js_identifier_is_if_async(node2, lambda4);
}
