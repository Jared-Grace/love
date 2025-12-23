import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_upload(deltas) {
  async function lambda(d) {
    let key = object_property_get(d, "key");
    let contents = await file_read(key);
    let versions = object_property_get(d, "versions");
    let first = list_first(versions);
    equal_assert(contents, first);
  }
  await each_async(deltas, lambda);
  marker("1");
}
