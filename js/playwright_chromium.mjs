import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
export async function playwright_chromium() {
  let r = await import_install("playwright");
  let chromium = property_get(r, "chromium");
  return chromium;
}
