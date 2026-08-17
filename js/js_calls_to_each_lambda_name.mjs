import { arguments_assert } from "./arguments_assert.mjs";
import { js_calls_to_each_lambda_n } from "./js_calls_to_each_lambda_n.mjs";
import { property_get } from "./property_get.mjs";
export function js_calls_to_each_lambda_name(call) {
  arguments_assert(arguments, 1);
  let r2 = js_calls_to_each_lambda_n(call);
  let n = property_get(r2, "n");
  let name = property_get(r2, "name");
  let r = {
    n,
    name,
  };
  return r;
}
