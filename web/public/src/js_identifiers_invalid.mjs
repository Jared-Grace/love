import { invoke_multiple_fn } from "../../../love/public/src/invoke_multiple_fn.mjs";
import { js_identifiers_invalid_fns } from "../../../love/public/src/js_identifiers_invalid_fns.mjs";
export function js_identifiers_invalid() {
  let invalid = invoke_multiple_fn(js_identifiers_invalid_fns);
  return invalid;
}
