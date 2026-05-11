import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function app_calendar_paste_convert(input) {
  input = "Monday, May 11⋅11:00am – 12:00pm";
  let split = text_split(input, "⋅");
  let r2 = list_first_second(list);
  let second = property_get(r2, "second");
  let first = property_get(r2, "first");
  let r = await import_install("luxon");
  let DateTime = property_get(r, "DateTime");
  const input_luxon = "Monday, May 11 2026 11:00am";
  let combined = text_combine_multiple(list2);
  const dt = DateTime.fromFormat(input_luxon, "cccc, LLL dd yyyy h:mma", {
    zone: "America/New_York",
  });
  return dt;
}
