import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public } from "./folder_public.mjs";
import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
export function app_shared_path_dev_served(app_name) {
  "the path an app's dev page is FETCHED at, which is its built path with the public folder taken off the front - because the server's root IS that folder, so a page built at public/dev/code.html is asked for as /dev/code.html";
  "it is the built path and the served path being different that this exists for. Joining the built path onto the server names a public inside public, and what comes back is not a page but a refusal - and a browser handed a bare repo path refuses before it even asks, which is how this was found.";
  arguments_assert(arguments, 1);
  let relative = html_name_to_path_dev(app_name);
  let public_folder = folder_public();
  let served = text_prefix_without(relative, public_folder);
  return served;
}
