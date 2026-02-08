export function curry(fn) {
  let r4 = function curried(...args) {
    if (args.length >= fn.length) {
      let r = fn(...args);
      return r;
    }
    let r3 = function curried_result(...next) {
      let r2 = curried(...args, ...next);
      return r2;
    };
    return r3;
  };
  return r4;
}
