import { each_async } from "../../../love/public/src/each_async.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { firebase_upload_object_compressed } from "../../../love/public/src/firebase_upload_object_compressed.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
export async function firebase_upload_object_compressed_chunked(v2, get) {
  let cs = list_chunk(v2, 20);
  async function lambda2(c) {
    async function lambda4(i) {
      let v4 = get(i);
      let value = object_property_get(v4, "value");
      let destination = object_property_get(v4, "destination");
      await firebase_upload_object_compressed(destination, value);
    }
    await each_unordered_async(c, lambda4);
  }
  await each_async(cs, lambda2);
}
