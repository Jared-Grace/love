import { lambda_get } from "./lambda_get.mjs";
import { js_null } from "./js_null.mjs";
export function js_null_get() {
  let value = js_null();
  let value_get = lambda_get(value);
  return value_get;
}
