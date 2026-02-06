import { each_range_async } from "../../../love/public/src/each_range_async.mjs";
import { lists_size_max } from "../../../love/public/src/lists_size_max.mjs";
import { lists_get } from "../../../love/public/src/lists_get.mjs";
export async function each_multiple_async(lists, lambda) {
  let max = lists_size_max(lists);
  async function lambda2(index) {
    let items = lists_get(lists, index);
    await lambda(items);
  }
  await each_range_async(max, lambda2);
}
