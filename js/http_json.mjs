import { buffer_string_to } from "../../../love/public/src/buffer_string_to.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { http } from "../../../love/public/src/http.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function http_json(url) {
  marker("1");
  let buffer = await http(url);
  let text = buffer_string_to(buffer);
  let parsed = json_from(text);
  return parsed;
}
