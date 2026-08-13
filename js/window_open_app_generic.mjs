import { window_app_url_generic } from "./window_app_url_generic.mjs";
import { window_open } from "./window_open.mjs";
export function window_open_app_generic(fn, app_fn_name, hash) {
  let url = window_app_url_generic(fn, app_fn_name, hash);
  window_open(url);
}
