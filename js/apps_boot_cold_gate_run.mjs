import { apps_boot_cold_report } from "./apps_boot_cold_report.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export async function apps_boot_cold_gate_run() {
  "gate: every app arrives when it is opened cold - no hash after the address, and a browser that has never been here before";
  "deliberately NOT one of the repo-wide gates, for the same reason the game's phone sweep and the app-replace end-to-end tests are not: it needs the local server running and a real browser for each app, so it is far slower than anything in that set and it fails for reasons that are not the code's fault when either is missing. run it on its own, after touching anything an app does while it opens";
  let report = await apps_boot_cold_report();
  let found = property_get(report, "found");
  let app_names = property_get(report, "app_names");
  list_empty_is_assert_json(found, {
    hint: "an app did not arrive when it was opened cold - each entry names the app, the address, and which of the three ways it failed: it threw while opening, it drew nothing, or it was still showing the loading message. the usual cause is something optional being done on the way in that is allowed to throw - a clipboard write, a permission, a stored value read as though it must be there - so the page dies before it draws and the reader is left on the loading message for ever. move the optional thing after the drawing and let it fail quietly",
    app_names,
  });
}
