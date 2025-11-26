import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
export async function list_map_async(list, lambda$item) {
  marker("1");
  list_is_assert(list);
  async function lambda2(la) {
    async function lambda(item) {
      let m = lambda$item(item);
      la(m);
    }
    await each_async(list, lambda);
  }
  let mapped = await list_adder_async(lambda2);
  return mapped;
}
