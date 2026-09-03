import { date_today_iso } from "./date_today_iso.mjs";
import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
import { date_weekday_day_month_year } from "./date_weekday_day_month_year.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_shared_bible_date_today_show(content) {
  "Today's day and date, written over the passage a reader has come back to.";
  "Somebody who reads here every day is keeping a habit rather than looking something up, and a habit is kept in days. Coming back to the place they left off and being told which day it is now is what makes the return part of a life instead of a bookmark.";
  "It is the day the reading is being done on, not the day it was left on. Yesterday's date over today's passage would be a record, and a record is somebody else's job.";
  let iso = date_today_iso();
  let code = app_shared_language_code_reader();
  let label = date_weekday_day_month_year(iso, code);
  let div = html_div_text_centered(content, label);
  let color = app_shared_color_blue_dark();
  html_font_color_set(div, color);
  return div;
}
