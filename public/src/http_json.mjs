import { json_from } from "./json_from.mjs";
import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_json(url) {
  marker("1");
  let text = await http(url);
  let json = json_from(json);
  return json;
}
