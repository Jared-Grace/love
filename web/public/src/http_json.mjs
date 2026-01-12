import { http_generic } from "../../../love/public/src/http_generic.mjs";
import { buffer_to_json } from "../../../love/public/src/buffer_to_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function http_json(url) {
  marker("1");
  marker("1");
  let buffer = await http_generic(url, {
    method: "GET",
  });
  let parsed = buffer_to_json(buffer);
  return parsed;
}
