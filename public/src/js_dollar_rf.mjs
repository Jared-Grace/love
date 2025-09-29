import { js_return_code_replace } from "../../../love/public/src/js_return_code_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_dollar_rf({ stack1 }) {
  marker("1");
  const code = "false";
  js_return_code_replace(code, stack1);
  return;
}
