import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function window_app_hash_name_url(app_fn_name, hash_name) {
  "Where one of these apps lives when the screen wanted is named after the hash mark by a bare word - a dev route, a directory, a sandbox - written as an address.";
  "Working out the address is kept apart from going to it, because there are two ways to go - beside what is open now, or instead of it - and only that last step differs between them.";
  let without = app_shared_name_prefix_without(app_fn_name);
  let file_name = file_name_html(without);
  let symbol = html_hash_symbol();
  let url = text_combine_multiple([file_name, symbol, hash_name]);
  return url;
}
