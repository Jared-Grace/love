export function curry_2(fn) {
  let r = function curry_1_result(a) {
    let r_inner = fn(a);
    return r_inner;
  };
  return r;
}
