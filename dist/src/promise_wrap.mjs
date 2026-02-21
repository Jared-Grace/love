export async function promise_wrap(lambda$resolve$reject) {
  let p = await new Promise(function promise_wrap_inner(resolve, reject) {
    try {
      lambda$resolve$reject(resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
  return p;
}
