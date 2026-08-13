import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { window_app_url_generic } from "./window_app_url_generic.mjs";
import { window_go } from "./window_go.mjs";
export function window_go_app(app_fn_name, hash) {
  "Go to another of these apps in the tab that is already open, naming it by the name of the function that is the app and handing it the link words to open with.";
  let fn = app_shared_name_prefix_without;
  let url = window_app_url_generic(fn, app_fn_name, hash);
  window_go(url);
}
