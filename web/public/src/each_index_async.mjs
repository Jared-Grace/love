import { marker } from "./marker.mjs";
import { each_async } from "./each_async.mjs";
export async function each_index_async(list, lambda$item$index) {
  marker("1");
  let index = 0;
  function lambda2(item) {
    lambda$item$index(item, index);
    index++;
  }
  await each_async(list, lambda2);
}
