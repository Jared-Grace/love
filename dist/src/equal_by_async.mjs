export async function equal_by_async(a, b, lambda$item) {
  let eq = (await lambda$item(a)) === (await lambda$item(b));
  return eq;
}
