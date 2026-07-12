export function invoke_later(lambda, args) {
  let later = function invoke_later_inner() {
    let result = lambda(...args);
    return result;
  };
  return later;
}
