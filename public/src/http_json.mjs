import { buffer_string_to } from "./buffer_string_to.mjs";
import { json_from } from "./json_from.mjs";
import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_json(url) {
  marker("1");
  let buffer = await http(url);
  let text = buffer_string_to(buffer);
  let parsed = json_from(text);
  return parsed;
}
