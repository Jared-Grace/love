import { json_decompress } from "./json_decompress.mjs";
import { property_get } from "./property_get.mjs";
export async function json_decompress_object(c) {
  let compressed = property_get(c, "compressed");
  let o = await json_decompress(compressed);
  return o;
}
