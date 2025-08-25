import { http } from "./http.mjs";
import { json_to } from "./json_to.mjs";
import { marker } from "./marker.mjs";
export async function http_json(url) {
  marker("1");
  let text = await http(url);
  let v = json_to(object);
  return text;
}
