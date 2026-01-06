import { app_prefix_without } from "../../../love/public/src/app_prefix_without.mjs";
import { hash_to_url } from "../../../love/public/src/hash_to_url.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { window_open } from "../../../love/public/src/window_open.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
export function window_open_app(app_fn, hash) {
  marker("1");
  let without = app_prefix_without(app_fn);
  let file_name = file_name_html(without);
  let h2 = hash_to_url(hash);
  window_open(file_name + h2);
}
