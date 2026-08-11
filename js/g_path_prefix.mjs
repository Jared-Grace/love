import { fn_name } from "./fn_name.mjs";
import { location_pathname_part_first_starts_with } from "./location_pathname_part_first_starts_with.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
export function g_path_prefix() {
  "What to put in front of a path to the game's art, which is the one step back out of the folder the page is sitting in - empty when the page is at the site root, and one step up when it is a stage folder.";
  "The question is HOW DEEP the page is, and it used to be asked as whether the address is localhost. Those two agreed for as long as the dev page was only ever opened on the machine serving it. A phone cannot do that - it has no localhost to develop from and reaches the same page by the machine's name on the home network - and there the answer came back as though the page were at the root, so every sprite was asked for one folder too deep and none of them arrived. Asking the depth directly answers for both, and also for a root page opened on localhost, which the old question got wrong in the other direction.";
  let latest = app_shared_name_latest_text();
  let dev = app_shared_name_dev_text();
  let in_latest = location_pathname_part_first_starts_with(latest);
  let in_dev = location_pathname_part_first_starts_with(dev);
  let path_prefix = "";
  if (in_latest || in_dev) {
    ("a URL, so a forward slash — see ",
      fn_name("g_folder_tiles"),
      ": a backslash here reads as an escape inside a CSS url() and quietly eats the next character, while an img src never noticed because URL parsing rewrites it");
    path_prefix = "../";
  }
  return path_prefix;
}
