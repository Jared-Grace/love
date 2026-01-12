import { http_get_options } from "../../../love/public/src/http_get_options.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { http_generic } from "../../../love/public/src/http_generic.mjs";
export async function http(url) {
  marker("1");
  let options = http_get_options();
  let v = await http_generic(url, options);
  return v;
}
