import { app_calendar_paste_convert_date_time_zones } from "./app_calendar_paste_convert_date_time_zones.mjs";
import { property_get } from "./property_get.mjs";
import { app_calendar_paste_convert_combined } from "./app_calendar_paste_convert_combined.mjs";
import { country_philippines } from "./country_philippines.mjs";
export function app_calendar_paste_convert(input, country) {
  let speaker_country = country_philippines();
  let r = app_calendar_paste_convert_combined(speaker_country, input, country);
  let combined = property_get(r, "combined");
  let r2 = app_calendar_paste_convert_date_time_zones(r, combined);
  let date_time_zones = property_get(r2, "date_time_zones");
  let duration = property_get(r2, "duration");
  let start = property_get(r2, "start");
  let r5 = {
    date_time_zones,
    start,
    duration,
  };
  return r5;
}
