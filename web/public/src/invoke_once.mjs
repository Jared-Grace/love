import { not } from "../../../love/public/src/not.mjs";
export function invoke_once(fn) {
  let invoked = false;
  function invoke_once_lambda() {
    let result = null;
    if (not(invoked)) {
      result = fn(...arguments);
    }
    return result;
  }
  return invoke_once_lambda;
}
