import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { js_null } from "../../../love/public/src/js_null.mjs";
export function js_null_get() {
  let value = js_null();
  let value_get = lambda_get(value);
  return value_get;
}
