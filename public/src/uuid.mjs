import { property_get } from "../../../love/public/src/property_get.mjs";
import { uuid_browser } from "../../../karate_code/public/src/uuid_browser.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function uuid() {
  if (browser_is()) {
    let r = uuid_browser();
    return r;
  }
  const r2 = await import_install("uuid");
  let uuidv4 = property_get(r2, "v4");
  let u = uuidv4();
  return u;
}
