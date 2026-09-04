import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
import { date_weekday_day_month_year } from "./date_weekday_day_month_year.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_shared_bible_history_entry_date_show(container, entry) {
  "The day a remembered reading was opened, written over the way back into it.";
  "IT IS THE DAY THAT READING WAS OPENED, not the day somebody is looking at the list. A list of places one has been is a record, and a record says when. Told the same date over every line, a reader learns nothing about which of them is the one they left off in.";
  "A LINE WRITTEN DOWN BEFORE THE DAY WAS BEING KEPT SHOWS NO DAY AT ALL, and that is the whole of what happens to it. The readings already on a device were noted without one, and there is no honest date to give them - a guess would be indistinguishable from a real one, and the reader would have no way to tell which lines they could trust.";
  arguments_assert(arguments, 2);
  let iso = property_get_or_null(entry, "opened_iso");
  let unknown = null_is(iso);
  if (unknown) {
    return null;
  }
  let code = app_shared_language_code_reader();
  let label = date_weekday_day_month_year(iso, code);
  let div = html_div_text_centered(container, label);
  let color = app_shared_color_blue_dark();
  html_font_color_set(div, color);
  return div;
}
