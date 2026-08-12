import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
import { folder_public } from "./folder_public.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { server_url } from "./server_url.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_url_dev_local_named(app_name) {
  "the address an app's dev build can be opened at on this machine, asked for by the app's NAME rather than by its main function. the twin that takes a function is the one to reach for when you already hold the function; this one is for a sweep, which walks a list of names read off the dev folder and has no way to get from a name to a function without importing every app in the repo.";
  "the served path is the built path with the public folder taken off the front, because the server's root IS that folder - a page sitting at public/dev/next.html is fetched as /dev/next.html, and joining the whole built path on would ask for a public inside public.";
  "it ends at the page, with no hash mark, so a caller wanting a screen adds its own.";
  let relative = html_name_to_path_dev(app_name);
  let public_folder = folder_public();
  let served = text_prefix_without(relative, public_folder);
  let left = server_url();
  let url = text_combine(left, served);
  return url;
}
