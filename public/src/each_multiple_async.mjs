import { lists_sizes_equal_assert } from "../../../love/public/src/lists_sizes_equal_assert.mjs";
import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { lists_get } from "../../../love/public/src/lists_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export async function each_multiple_async(lists, lambda) {
  lists_sizes_equal_assert(lists);
  let first = list_first(lists);
  async function lambda2(item, index) {
    let items = lists_get(lists, index);
    await lambda(items);
  }
  await each_index_async(first, lambda2);
}
