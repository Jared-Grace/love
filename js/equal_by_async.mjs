import { equal } from "./equal.mjs";
export async function equal_by_async(a, b, lambda$item) {
  let left = await lambda$item(a);
  let right = await lambda$item(b);
  let eq = equal(left, right);
  return eq;
}
