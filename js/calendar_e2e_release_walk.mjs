import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_url_dev_local_named } from "./app_shared_url_dev_local_named.mjs";
import { calendar_e2e_guest_walk } from "./calendar_e2e_guest_walk.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function calendar_e2e_release_walk() {
  arguments_assert(arguments, 0);
  ('Walks the calendar\'s dev page on this machine as guests do, and throws, naming every failure, unless every step passed. Run before the calendar is released (human: "this site will need E2E testing to confirm everything still works when releasing new versions").');
  ("The dev page and not the published one, because the dev build talks to the test Worker and uses the spam check's test key, which a headless browser passes; the published page's real key stops it. The release builds the dev bundle from the same source just before, so the walk sees the code about to ship.");
  ("host=jm is the host whose open hours are walked; the walk books and then cancels on that host.");
  let page = app_shared_url_dev_local_named("calendar");
  let url = page + "#host=jm";
  let walked = await calendar_e2e_guest_walk(url);
  let ok = property_get(walked, "ok");
  true_is_assert_json(ok, walked);
  return walked;
}
