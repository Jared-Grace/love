import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_json(url) {
  marker("1");
  let text = await http(url);
  jf;
  return text;
}
