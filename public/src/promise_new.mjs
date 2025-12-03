export function promise_new(lambda$resolve$reject) {
  let v = new Promise(lambda$resolve$reject);
  return v;
}
