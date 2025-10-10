import { each_async } from "../../../love/public/src/each_async.mjs";
import { range } from "../../../love/public/src/range.mjs";
export async function each_range_async(count, lambda) {
  let r = range(count);
  await each_async(r, lambda);
}
