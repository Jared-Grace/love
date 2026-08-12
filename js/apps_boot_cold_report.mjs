import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { log_keep } from "./log_keep.mjs";
import { fn_name } from "./fn_name.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { app_shared_url_dev_local_named } from "./app_shared_url_dev_local_named.mjs";
import { page_boot_cold_capture } from "./page_boot_cold_capture.mjs";
import { page_boot_reasons } from "./page_boot_reasons.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function apps_boot_cold_report() {
  "opens every app that has a dev build the way somebody following a link opens it - nothing after the address, nothing remembered from before - and reports the ones that never arrive.";
  ("this exists because the failure it looks for is invisible everywhere the work is done. an app is opened all day long with a hash in the address and a browser full of what yesterday left behind, so the one arrival nobody ever performs is the first one. ",
    fn_name("app_next"),
    " died exactly there: it put a verse on the clipboard while it was opening, a browser refuses that whenever its window is not the focused one, and the refusal threw before a single line was drawn. the page then sat on its loading message for ever. nothing was red, no test knew, and the only way it could have been found was somebody opening the page cold - which is what this does.");
  ("the sweep is deliberately one page at a time. a browser for each is already the expensive part, and this machine usually has several of these agents on it at once, so opening twenty-six at once would measure the load rather than the code.");
  ("each app is reported the moment it has been looked at, rather than all of them at the end. this sweep opens a real browser for each of twenty-six apps and can run past ten minutes, which is long enough that something will sometimes stop it early - and a sweep that only speaks at the end has nothing to say when that happens. it has already been killed once by a caller's own patience running out and thrown away every app it had checked. a line per app means an interrupted run is still worth exactly what it did.");
  let app_names = await apps_names_dev();
  let found = [];
  for (let app_name of app_names) {
    let url = app_shared_url_dev_local_named(app_name);
    let capture = await page_boot_cold_capture(url);
    let errors = property_get(capture, "errors");
    let body_text = property_get(capture, "body_text");
    let reasons = page_boot_reasons(body_text, errors);
    let arrived = list_empty_is(reasons);
    let told = list_join_comma_space(reasons);
    if (arrived) {
      told = "arrived";
    }
    log_keep(apps_boot_cold_report.name, told);
    if (not(arrived)) {
      let entry = {
        app_name,
        url,
        reasons,
        errors,
        body_text,
      };
      list_add(found, entry);
    }
  }
  let report = {
    found,
    app_names,
  };
  return report;
}
