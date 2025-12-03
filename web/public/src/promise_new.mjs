export async function promise_new(lambda$resolve$reject) {
  let result = await new Promise(lambda$resolve$reject);
  return result;
}
