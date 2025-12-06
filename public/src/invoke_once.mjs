export function invoke_once(fn) {
  let invoked = false;
  function invoke_once_lambda() {
    if (invoked) {
      return null;
    }
  }
  return invoke_once_lambda;
}
