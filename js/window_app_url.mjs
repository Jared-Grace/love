import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { window_app_url_generic } from "./window_app_url_generic.mjs";
export function window_app_url(app_fn_name, hash) {
  "Where one of these apps lives, written as an address, with the link words it should open with.";
  "The twin of the one that opens it. Both name an app the same way - by the function the app is written as, with the shared prefix taken off - so a page that wants to hand the reader a link rather than open a tab for them does not have to spell the address out and cannot come to spell it differently.";
  let fn = app_shared_name_prefix_without;
  let url = window_app_url_generic(fn, app_fn_name, hash);
  return url;
}
