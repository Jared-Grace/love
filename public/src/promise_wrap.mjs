export function promise_wrap(lambda$resolve$reject) {
  let p = new Promise(function lambda4(resolve, reject) {
    try {
      lambda$resolve$reject(resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
  return p;
}
