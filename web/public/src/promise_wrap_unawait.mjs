export function promise_wrap_unawait(lambda$resolve$reject) {
  let r = new Promise(function promise_wrap_inner(resolve, reject) {
    try {
      lambda$resolve$reject(resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
  return r;
}
