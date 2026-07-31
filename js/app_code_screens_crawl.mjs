import { app_code_screens_records } from "./app_code_screens_records.mjs";
import { app_code_screens_crawl_summary } from "./app_code_screens_crawl_summary.mjs";
import { property_get } from "./property_get.mjs";
export async function app_code_screens_crawl(url_prefix) {
  "the durable regression crawler: walk EVERY code lesson (examples plus every quiz kind via Next) in a headless browser and return a compact summary of the mechanical failures - horizontal overflow, blank screens, page errors. This is the deterministic half of the check; the captured text feeds the separate make-sense judge via the manifest. url_prefix is the served code.html, e.g. http://localhost:8080/love/public/dev/code.html . Reuses the same playwright harness as the app-replace e2e tests";
  let both = await app_code_screens_records_summary(url_prefix);
  let summary = property_get(both, "summary");
  return summary;
}
