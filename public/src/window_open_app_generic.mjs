import { window_open } from "../../../love/public/src/window_open.mjs";
import { hash_to_url } from "../../../love/public/src/hash_to_url.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
export function window_open_app_generic(fn, app_fn_name, hash) {
  let without = fn(app_fn_name);
  let file_name = file_name_html(without);
  let h2 = hash_to_url(hash);
  window_open(file_name + h2);
}
