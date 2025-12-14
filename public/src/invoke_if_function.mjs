import { not } from "../../../love/public/src/not.mjs";
import { function_is } from "../../../love/public/src/function_is.mjs";
import { lambda_invoke } from "../../../love/public/src/lambda_invoke.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function invoke_if_function(fn) {
  marker("1");
  let fi = function_is(fn);
  if (not(fi)) {
    return;
  }
  let v = lambda_invoke(fn);
  return v;
}
