import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_names } from "./apps_published_names.mjs";
import { apps_boot_cold_report_generic } from "./apps_boot_cold_report_generic.mjs";
import { cloudflare_site_page_url } from "./cloudflare_site_page_url.mjs";
export async function cloudflare_site_apps_boot_cold_report() {
  arguments_assert(arguments, 0);
  ("opens every published app on the published site the way a stranger following a link does, and reports the ones that never arrive.");
  ("the site is a different place from the machine the apps are built on, and things break there that cannot break here: next opened perfectly on this machine and showed only a sorry notice on the site, because the file store had never been told the site's address. so the published site is asked directly rather than trusted to match.");
  let app_names = await apps_published_names();
  let report = await apps_boot_cold_report_generic(
    app_names,
    cloudflare_site_page_url,
  );
  return report;
}
