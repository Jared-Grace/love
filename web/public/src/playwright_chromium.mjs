import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function playwright_chromium() {
  const r = await import_install("playwright");
  let chromium = property_get(r, "chromium");
  return chromium;
}
