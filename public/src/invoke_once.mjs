export function invoke_once(fn) {
  function invoke_once_lambda() {}
  return invoke_once_lambda;
}
