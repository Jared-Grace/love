export function curry_1(fn) {
  let r = function lambda(a) {
    let r2 = fn(a);
    return r2;
  };
  return r;
}
