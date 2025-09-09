import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_firebase(url) {
  marker("1");
  let v = await http(url);
  return v;
}
