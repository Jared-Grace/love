import { each_async } from "./each_async.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { property_get } from "./property_get.mjs";
import { list_chunk } from "./list_chunk.mjs";
export async function firebase_upload_object_compressed_chunked(
  list,
  lambda$item,
) {
  let cs = list_chunk(list, 20);
  async function lambda2(c) {
    async function lambda4(item) {
      let v = lambda$item(item);
      let value = property_get(v, "value");
      let destination = property_get(v, "destination");
      await firebase_upload_object_compressed(destination, value);
    }
    await each_unordered_async(c, lambda4);
  }
  await each_async(cs, lambda2);
}
