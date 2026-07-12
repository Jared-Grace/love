import { http_get_options } from "./http_get_options.mjs";
import { http_generic } from "./http_generic.mjs";
export async function http(url) {
  let options = http_get_options();
  let v = await http_generic(url, options);
  return v;
}
