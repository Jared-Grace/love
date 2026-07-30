import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
export async function playwright_firefox() {
  let ff = await import_install("playwright");
  let launcher = property_get(ff, "firefox");
  return launcher;
}
