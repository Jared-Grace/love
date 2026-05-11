import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function app_calendar_paste_convert(input) {
  let r = await import_install("luxon");
  let DateTime = property_get(r, "DateTime");
  const dt = DateTime.fromFormat(
    "Monday, May 11 2026 11:00am",
    "cccc, LLL dd yyyy h:mma",
    {
      zone: "America/New_York",
    },
  );
  return dt;
}
