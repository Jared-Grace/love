import { hash_to_url } from "../../../love/public/src/hash_to_url.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { window_open } from "../../../love/public/src/window_open.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
export function window_open_app(app_fn, hash) {
  marker("1");
  let file_name = file_name_html(app_fn.name);
  let h2 = hash_to_url(hash2);
  window_open(file_name);
}
