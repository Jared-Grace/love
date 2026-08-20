import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { location_pathname_part_first_starts_with } from "./location_pathname_part_first_starts_with.mjs";
import { not } from "./not.mjs";
export function app_shared_page_stage_prod_is() {
  "Whether the page being read right now is the built one everybody else opens, rather than one of the two copies kept beside it while something is being worked on.";
  "Asked as which folder the page is sitting in, because that is what the three stages ARE - dev and latest are folders and the built one is the root. Asked instead as whether the address is localhost it would answer wrongly for a phone on the home network, which has no localhost of its own and reaches the working copy by the machine's name.";
  "The two folder words are asked for rather than written down here, so this and the builds that put the pages there can never come to disagree about what they are.";
  let dev = app_shared_name_dev_text();
  let latest = app_shared_name_latest_text();
  let in_dev = location_pathname_part_first_starts_with(dev);
  let in_latest = location_pathname_part_first_starts_with(latest);
  let staged = in_dev || in_latest;
  let r = not(staged);
  return r;
}
