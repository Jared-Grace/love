import {each_async} from "./each_async.mjs";
import {range} from "./range.mjs";
export async function each_range_async(count, lambda) {
  let r = range(count);
  await each_async(r, lambda);
}
