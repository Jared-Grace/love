import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function apps_boot_cold_report_assert(report) {
  arguments_assert(arguments, 1);
  ("throws when a cold-open sweep found any app that never arrived, naming each one and what it did instead.");
  let found = property_get(report, "found");
  let app_names = property_get(report, "app_names");
  list_empty_is_assert_json(found, {
    hint: "an app did not arrive when it was opened cold - each entry names the app, the address, and which of the three ways it failed: it threw while opening, it drew nothing, or it was still showing the loading message. the usual cause is something optional being done on the way in that is allowed to throw - a clipboard write, a permission, a stored value read as though it must be there - so the page dies before it draws and the reader is left on the loading message for ever. move the optional thing after the drawing and let it fail quietly",
    app_names,
  });
}
