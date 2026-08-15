import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { window_open } from "./window_open.mjs";
export function window_open_app_hash_name(app_fn_name, hash_name) {
  "opens one of these apps beside the page you are on, at the screen its address names after the hash mark - a dev route, a directory, a sandbox";
  "the plain opener writes the other kind of hash, a list of key and value pairs, and a bare word is not one of those - so a page wanting to hand somebody a named screen had to spell the whole address out for itself";
  let without = app_shared_name_prefix_without(app_fn_name);
  let file_name = file_name_html(without);
  let symbol = html_hash_symbol();
  let url = text_combine_multiple([file_name, symbol, hash_name]);
  window_open(url);
}
