export function invoke_later(lambda, args) {
  let later = function lambda3() {
    let result = lambda(...args);
    return result;
  };
  return later;
}
