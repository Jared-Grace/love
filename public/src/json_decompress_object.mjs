import { json_decompress } from "../../../love/public/src/json_decompress.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function json_decompress_object(c) {
  let compressed = object_property_get(c, "compressed");
  let o = await json_decompress(compressed);
  return o;
}
