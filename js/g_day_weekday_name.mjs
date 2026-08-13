import { g_day_calendar_stride } from "./g_day_calendar_stride.mjs";
import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
import { week_day_names } from "./week_day_names.mjs";
export function g_day_weekday_name(day_number) {
  "Which day of the week a game day falls on, counting the first day of the game as a Sunday.";
  "The day number is the player's own count of days played, from zero, and the calendar day is that number of STRIDES. So this is the one place the two clocks are read together.";
  "Every seventh game day comes back to Sunday, which is what keeps a first day of the week to gather on (Acts 20 verse 7, 1 Corinthians 16 verse 2) inside a story that is spending months.";
  let stride = g_day_calendar_stride();
  let calendar_day = multiply(day_number, stride);
  let index = modulo(calendar_day, 7);
  let names = week_day_names();
  let name = names[index];
  return name;
}
