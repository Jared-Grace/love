export function promise_wrap(lambda) {
  let p = new Promise(function lambda4(resolve, reject) {
    try {
      lambda(resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
  return p;
}
