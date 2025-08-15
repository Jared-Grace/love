export async function equal_by_async(a, b, lambda$item) {
  let e = (await lambda$item(a)) === (await lambda$item(b));
  return e;
}
