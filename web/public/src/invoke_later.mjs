export function invoke_later(lambda, args) {
  let r3 = function lambda3() {
    let r2 = lambda(args);
    return r2;
  };
  return r3;
}
