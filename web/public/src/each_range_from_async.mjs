import { each_async } from "../../../love/public/src/each_async.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
export async function each_range_from_async(from, to, lambda) {
  let list = range_from(from, to);
  await each_async(list, lambda);
}
