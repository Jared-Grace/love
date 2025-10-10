import { js_dollar_if_call } from "../../../love/public/src/js_dollar_if_call.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function js_dollar_ib({ stack1, ast }) {
  let fn = browser_is;
  await js_dollar_if_call(stack1, fn, ast);
}
