export function catch_call(reject, lambda) {
  let i = function inner() {
    let result = null;
    try {
      result = lambda(...arguments);
    } catch (e) {
      reject(e);
    }
    return result;
  };
  return i;
}
