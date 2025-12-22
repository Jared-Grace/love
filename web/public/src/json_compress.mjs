import { string_compress } from "../../../love/public/src/string_compress.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function json_compress(data) {
  let json = json_to(data);
  let compressed = string_compress(json);
  return compressed;
}
