import { js_call_is } from "../../../love/public/src/js_call_is.mjs";
export async function js_call_is_if(expression, on_call_is) {
  let ci = js_call_is(expression);
  if (ci) {
    await on_call_is();
  }
}
