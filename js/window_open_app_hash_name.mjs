import { window_app_hash_name_url } from "./window_app_hash_name_url.mjs";
import { window_open } from "./window_open.mjs";
export function window_open_app_hash_name(app_fn_name, hash_name) {
  "opens one of these apps beside the page you are on, at the screen its address names after the hash mark - a dev route, a directory, a sandbox";
  "the plain opener writes the other kind of hash, a list of key and value pairs, and a bare word is not one of those - so a page wanting to hand somebody a named screen had to spell the whole address out for itself";
  let url = window_app_hash_name_url(app_fn_name, hash_name);
  window_open(url);
}
