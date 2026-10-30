import { fn_name } from "./fn_name.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { apps_boot_cold_report_generic } from "./apps_boot_cold_report_generic.mjs";
import { app_shared_url_dev_local_named } from "./app_shared_url_dev_local_named.mjs";
export async function apps_boot_cold_report() {
  "opens every app that has a dev build the way somebody following a link opens it - nothing after the address, nothing remembered from before - and reports the ones that never arrive.";
  ("this exists because the failure it looks for is invisible everywhere the work is done. an app is opened all day long with a hash in the address and a browser full of what yesterday left behind, so the one arrival nobody ever performs is the first one. ",
    fn_name("app_next"),
    " died exactly there: it put a verse on the clipboard while it was opening, a browser refuses that whenever its window is not the focused one, and the refusal threw before a single line was drawn. the page then sat on its loading message for ever. nothing was red, no test knew, and the only way it could have been found was somebody opening the page cold - which is what this does.");
  let app_names = await apps_names_dev();
  let report = await apps_boot_cold_report_generic(
    app_names,
    app_shared_url_dev_local_named,
  );
  return report;
}
