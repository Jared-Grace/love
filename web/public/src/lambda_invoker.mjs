export function lambda_invoker(fn, args) {
  let r = function lambda() {
    fn(...args);
  };
  return r;
}
