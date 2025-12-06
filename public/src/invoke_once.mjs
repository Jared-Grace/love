export function invoke_once(fn) {
  let invoked = false;
  function invoke_once_lambda() {
    if (invoked) {
      let v = null;
      return v;
      let result = null;
      result = fn(...arguments);
    }
  }
  return invoke_once_lambda;
}
