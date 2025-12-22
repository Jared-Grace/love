import { json_from } from "../../../love/public/src/json_from.mjs";
import { string_decompress } from "../../../love/public/src/string_decompress.mjs";
export function json_decompress(compressed) {
  let json = string_decompress(compressed);
  let text = json_from(json);
  return text;
}
