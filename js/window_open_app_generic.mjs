import { window_open } from "./window_open.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { text_combine } from "./text_combine.mjs";
export function window_open_app_generic(fn, app_fn_name, hash) {
  let without = fn(app_fn_name);
  let file_name = file_name_html(without);
  let h = hash_to_url(hash);
  window_open(text_combine(file_name, h));
}
