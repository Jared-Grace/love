import { each_index_async } from "./each_index_async.mjs";
import { marker } from "./marker.mjs";
import { lists_get } from "./lists_get.mjs";
import { list_first } from "./list_first.mjs";
export async function each_multiple_async(lists, lambda) {
  marker("1");
  let first = list_first(lists);
  function lambda2(item, index) {
    let items = lists_get(lists, index);
    lambda(items);
  }
  await each_index_async(first, lambda2);
}
