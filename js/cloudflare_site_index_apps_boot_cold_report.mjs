import { arguments_assert } from "./arguments_assert.mjs";
import { app_index_main_fns } from "./app_index_main_fns.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { apps_boot_cold_report_generic } from "./apps_boot_cold_report_generic.mjs";
import { cloudflare_site_page_url } from "./cloudflare_site_page_url.mjs";
export async function cloudflare_site_index_apps_boot_cold_report() {
  arguments_assert(arguments, 0);
  ("Opens every app the front page offers on christarose.org the way a stranger following its card does, and reports the ones that never arrive.");
  ("The list is read from what the front page draws rather than from the folder that goes live, because a card is a promise and an app can be offered without standing in that folder. Cards leading off the site are left out, because they are other sites to answer for.");
  function about_opened() {}
  let entries = app_index_main_fns(about_opened);
  let names = [];
  for (let entry of entries) {
    let app_fn = entry.app_fn;
    if (app_fn) {
      let without = text_prefix_without(app_fn, "app_");
      names.push(without);
    }
  }
  let report = await apps_boot_cold_report_generic(
    names,
    cloudflare_site_page_url,
  );
  return report;
}
