import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function app_calendar_paste_convert() {
  let r = await import_install("luxon");
  let DateTime = property_get(r, "DateTime");
}
