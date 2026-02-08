export function curry_1(fn) {
  let r = function lambda(a) {
    return fn(a);
  };
  return r;
}
