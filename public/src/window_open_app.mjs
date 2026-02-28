import { app_prefix_without } from "../../../love/public/src/app_prefix_without.mjs";
import { window_open_app_generic } from "../../../love/public/src/window_open_app_generic.mjs";
export function window_open_app(app_fn_name, hash) {
  let fn = app_prefix_without;
  window_open_app_generic(fn, app_fn_name, hash);
}
