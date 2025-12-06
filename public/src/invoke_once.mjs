export function invoke_once(fn) {
  let invoked = false;
  function invoke_once_lambda() {
    let result = null;
    if (invoked) {
      let v = null;
      return v;
      result = fn(...arguments);
      return result;
    }
  }
  return invoke_once_lambda;
}
