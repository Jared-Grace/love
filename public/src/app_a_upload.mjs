import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_upload(deltas) {
  async function lambda(d) {
    let key = object_property_get(d, "key");
    let versions = object_property_get(d, "versions");
  }
  await each_async(deltas, lambda);
  marker("1");
}
