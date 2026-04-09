export function invoke_later(lambda, args) {
  let later = function lambda3() {
    let r2 = lambda(args);
    return r2;
  };
  return later;
}
