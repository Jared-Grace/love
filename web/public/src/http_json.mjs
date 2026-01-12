import { http_get_options } from "../../../love/public/src/http_get_options.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { http_generic } from "../../../love/public/src/http_generic.mjs";
import { buffer_to_json } from "../../../love/public/src/buffer_to_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function http_json(options) {
  marker("1");
  marker("1");
  let g = http_get_options();
  let to = object_merge(g, options);
  let buffer = await http_generic(url, to);
  let parsed = buffer_to_json(buffer);
  return parsed;
}
