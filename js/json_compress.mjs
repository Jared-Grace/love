import { text_compress } from "./text_compress.mjs";
import { json_to } from "./json_to.mjs";
export async function json_compress(data) {
  let json = json_to(data);
  let compressed = await text_compress(json);
  return compressed;
}
