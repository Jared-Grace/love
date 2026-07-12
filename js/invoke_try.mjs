import { not } from "./not.mjs";
import { function_is } from "./function_is.mjs";
import { invoke } from "./invoke.mjs";
export function invoke_try(fn) {
  let fi = function_is(fn);
  if (not(fi)) {
    return;
  }
  let v = invoke(fn);
  return v;
}
