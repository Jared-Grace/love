import { window_open_app_generic } from "./window_open_app_generic.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
export function window_open_app_fn(app_fn, hash) {
  let fn = app_shared_name_prefix_without_fn;
  window_open_app_generic(fn, app_fn, hash);
}
