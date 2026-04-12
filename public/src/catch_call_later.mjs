export function catch_call_later(lambda$e, lambda) {
  let i = function inner() {
    let result = null;
    try {
      result = lambda(...arguments);
    } catch (e) {
      lambda$e(e);
    }
    return result;
  };
  return i;
}
