export function lambda_invoker(fn, args) {
  let r = function lambda() {
    return fn(...args);
  };
  return r;
}
