import { each_range_async } from "../../../love/public/src/each_range_async.mjs";
import { lists_size_max } from "../../../love/public/src/lists_size_max.mjs";
import { lists_get } from "../../../love/public/src/lists_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export async function each_multiple_async(lists, lambda) {
  let max = lists_size_max(lists);
  let first = list_first(lists);
  async function lambda2(item, index) {
    let items = lists_get(lists, index);
    await lambda(items);
  }
  await each_range_async(first, lambda2);
}
