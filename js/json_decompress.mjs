import { json_from } from "./json_from.mjs";
import { text_decompress } from "./text_decompress.mjs";
export async function json_decompress(compressed) {
  let json = await text_decompress(compressed);
  let text = json_from(json);
  return text;
}
