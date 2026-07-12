import { property_get } from "./property_get.mjs";
import { js_await_if_unwrap } from "./js_await_if_unwrap.mjs";
export function js_await_if_unwrap_argument(call) {
  let r = js_await_if_unwrap(call);
  call = property_get(r, "argument");
  return call;
}
