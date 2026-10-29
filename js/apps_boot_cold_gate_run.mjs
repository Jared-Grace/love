import { apps_boot_cold_report } from "./apps_boot_cold_report.mjs";
import { apps_boot_cold_report_assert } from "./apps_boot_cold_report_assert.mjs";
export async function apps_boot_cold_gate_run() {
  "gate: every app arrives when it is opened cold - no hash after the address, and a browser that has never been here before";
  "deliberately NOT one of the repo-wide gates, for the same reason the game's phone sweep and the app-replace end-to-end tests are not: it needs the local server running and a real browser for each app, so it is far slower than anything in that set and it fails for reasons that are not the code's fault when either is missing. run it on its own, after touching anything an app does while it opens";
  let report = await apps_boot_cold_report();
  apps_boot_cold_report_assert(report);
}
