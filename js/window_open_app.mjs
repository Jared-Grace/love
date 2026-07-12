import { app_prefix_without } from "./app_prefix_without.mjs";
import { window_open_app_generic } from "./window_open_app_generic.mjs";
export function window_open_app(app_fn_name, hash) {
  let fn = app_prefix_without;
  window_open_app_generic(fn, app_fn_name, hash);
}
