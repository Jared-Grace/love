import { app_shared_path_dev_served } from "./app_shared_path_dev_served.mjs";
import { server_url } from "./server_url.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_url_dev_local_named(app_name) {
  "the address an app's dev build can be opened at on this machine, asked for by the app's NAME rather than by its main function. the twin that takes a function is the one to reach for when you already hold the function; this one is for a sweep, which walks a list of names read off the dev folder and has no way to get from a name to a function without importing every app in the repo.";
  "it ends at the page, with no hash mark, so a caller wanting a screen adds its own.";
  let served = app_shared_path_dev_served(app_name);
  let left = server_url();
  let url = text_combine(left, served);
  return url;
}
