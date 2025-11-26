import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
export async function list_map_async(list, lambda$item) {
  marker("1");
  list_is_assert(list);
  async function lambda(item) {
    let m = lambda$item(item);
    return m;
  }
  await each_async(list, lambda);
  let mapped = list.map(lambda$item);
  return mapped;
}
