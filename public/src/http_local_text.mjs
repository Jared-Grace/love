import { http_local } from "./http_local.mjs";
import { marker } from "./marker.mjs";
export async function http_local_text(url) {
  marker("1");
  return await http_local(url);
}
