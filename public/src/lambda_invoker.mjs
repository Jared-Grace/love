export function lambda_invoker(fn, args) {
  let r = function lambda() {
    let r2 = fn(...args);
    return r2;
  };
  return r;
}
