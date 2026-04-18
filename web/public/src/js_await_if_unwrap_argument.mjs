import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_await_if_unwrap } from "../../../love/public/src/js_await_if_unwrap.mjs";
export function js_await_if_unwrap_argument(call) {
  let r2 = js_await_if_unwrap(call);
  call = property_get(r2, "argument");
  return call;
}
