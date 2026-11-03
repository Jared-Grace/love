import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { not } from "./not.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { location_pathname_part_first_starts_with } from "./location_pathname_part_first_starts_with.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
export function app_shared_page_stage_root() {
  arguments_assert(arguments, 0);
  ("The address every page of the copy being read sits under: /dev/ and /latest/ for the two folders kept beside the built site, and / for the built site itself.");
  ("A link written from here leads to the same copy from any page in it, however many parts that page's own address has. A link written relative to the page only does that while every page sits directly in the folder, and a page at learn/en would send it to learn/bible.");
  ("Outside a browser there is no copy being read, so nothing goes in front and an address stays as it was.");
  let b = browser_is();
  if (not(b)) {
    let r = "";
    return r;
  }
  let dev = app_shared_name_dev_text();
  if (location_pathname_part_first_starts_with(dev)) {
    let combined = text_combine_multiple(["/", dev, "/"]);
    return combined;
  }
  let latest = app_shared_name_latest_text();
  if (location_pathname_part_first_starts_with(latest)) {
    let combined2 = text_combine_multiple(["/", latest, "/"]);
    return combined2;
  }
  let r2 = "/";
  return r2;
}
