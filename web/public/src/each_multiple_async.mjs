import { list_all } from "../../../love/public/src/list_all.mjs";
import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { lists_get } from "../../../love/public/src/lists_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export async function each_multiple_async(lists, lambda) {
  let a = list_all(list, function lambda3(item2) {});
  let first = list_first(lists);
  async function lambda2(item, index) {
    let items = lists_get(lists, index);
    await lambda(items);
  }
  await each_index_async(first, lambda2);
}
