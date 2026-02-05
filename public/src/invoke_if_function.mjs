import { not } from "../../../love/public/src/not.mjs";
import { function_is } from "../../../love/public/src/function_is.mjs";
import { invoke } from "../../../love/public/src/invoke.mjs";
export function invoke_if_function(fn) {
  let fi = function_is(fn);
  if (not(fi)) {
    return;
  }
  let v = invoke(fn);
  return v;
}
