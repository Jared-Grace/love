import { each_unordered_async } from "./each_unordered_async.mjs";
import { range } from "./range.mjs";
export async function each_range_unordered_async(count, lambda$index) {
  let r = range(count);
  await each_unordered_async(r, lambda$index);
}
