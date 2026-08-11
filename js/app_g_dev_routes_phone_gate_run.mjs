import { app_g_dev_routes_phone_report } from "./app_g_dev_routes_phone_report.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_dev_routes_phone_gate_run() {
  "gate: no dev screen of the game puts anything off the edge of a phone where it cannot be scrolled back to";
  "deliberately NOT one of the repo-wide gates, for the same reason the app-replace end-to-end tests are not: it needs the local server running and a real browser to drive, so it is slower than everything in that set and it fails for reasons that are not the code's fault when either is missing. it is run on its own, when the game's screens have been touched";
  let report = await app_g_dev_routes_phone_report();
  let found = property_get(report, "found");
  let width = property_get(report, "width");
  let height = property_get(report, "height");
  list_empty_is_assert_json(found, {
    hint: "a dev screen of the game drew something outside a phone-sized screen with no way to scroll to it - each entry names the screen and what fell off which edge. a size written in fixed units is the usual cause; hold it to a share of the screen's width as well, min(<the old size>, <a share>vw), so nothing wider than a phone changes",
    width,
    height,
  });
}
