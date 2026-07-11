import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { js_identifiers_invalid_fns } from "../../../love/public/src/js_identifiers_invalid_fns.mjs";
export function js_identifiers_invalid() {
  let fns = js_identifiers_invalid_fns();
  let invalid = invoke_multiple(fns);
  return invalid;
}
