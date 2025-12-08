import { buffer_to_json } from "../../../love/public/src/buffer_to_json.mjs";
import { http } from "../../../love/public/src/http.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function http_json(url) {
  marker("1");
  let buffer = await http(url);
  let parsed = buffer_to_json(buffer);
  return parsed;
}
