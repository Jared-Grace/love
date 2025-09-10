import { buffer_string_to } from "./buffer_string_to.mjs";
import { http_local } from "./http_local.mjs";
import { marker } from "./marker.mjs";
export async function http_local_text(url) {
  marker("1");
  let buffer = await http_local(url);
  const text = buffer_string_to(buffer);
  return text;
}
