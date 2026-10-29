import { arguments_assert } from "./arguments_assert.mjs";
import { cloudflare_site_apps_boot_cold_report } from "./cloudflare_site_apps_boot_cold_report.mjs";
import { apps_boot_cold_report_assert } from "./apps_boot_cold_report_assert.mjs";
export async function cloudflare_site_apps_boot_cold_gate_run() {
  arguments_assert(arguments, 0);
  ("gate: every published app arrives when a stranger opens it cold on the published site.");
  ("deliberately NOT one of the repo-wide gates: it opens a real browser for each app against the live site, so it is slow, it needs the internet, and it answers about what was last sent rather than about the commit. run it after a sending, and before pointing anybody new at the site.");
  let report = await cloudflare_site_apps_boot_cold_report();
  apps_boot_cold_report_assert(report);
}
