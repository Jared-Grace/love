import { js_call_is } from "../../../love/public/src/js_call_is.mjs";
export function js_call_is_if_async(expression, on_call_is) {
  let ci = js_call_is(expression);
  if (ci) {
    on_call_is();
  }
}
