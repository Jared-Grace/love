import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_json(url) {
  marker("1");
  return await http(url);
}
