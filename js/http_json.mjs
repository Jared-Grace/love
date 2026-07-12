import { http_get_options } from "./http_get_options.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { http_generic } from "./http_generic.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function http_json(url, options) {
  let g = http_get_options();
  let to = object_merge_set(g, options);
  let buffer = await http_generic(url, to);
  let parsed = buffer_to_json(buffer);
  return parsed;
}
