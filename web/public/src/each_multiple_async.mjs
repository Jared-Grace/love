import { assert } from "../../../love/public/src/assert.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { lists_get } from "../../../love/public/src/lists_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export async function each_multiple_async(lists, lambda) {
  let first = list_first(lists);
  let fs = list_size(first);
  function lambda3(list) {
    let size = list_size(list);
    return size === fs;
  }
  let a = list_all(lists, lambda3);
  assert(a);
  async function lambda2(item, index) {
    let items = lists_get(lists, index);
    await lambda(items);
  }
  await each_index_async(first, lambda2);
}
