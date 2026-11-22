import { arguments_assert } from "./arguments_assert.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { date_week_sunday } from "./date_week_sunday.mjs";
import { week_dates } from "./week_dates.mjs";
import { calendar_host_openings_current } from "./calendar_host_openings_current.mjs";
import { calendar_openings_to_ranges } from "./calendar_openings_to_ranges.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { calendar_ranges_to_openings } from "./calendar_ranges_to_openings.mjs";
import { equal } from "./equal.mjs";
import { app_shared_toast_saving } from "./app_shared_toast_saving.mjs";
import { week_calendar } from "./week_calendar.mjs";
export function app_calendar_host_hours(area, key, settings) {
  arguments_assert(arguments, 3);
  ("The host's weekly free hours on the grid. A change saves at once as the schedule in force from today; days before today keep the hours they had, since a schedule only ever starts on a date.");
  let today = date_today_iso();
  let sunday_iso = date_week_sunday(today);
  let dates = week_dates(sunday_iso);
  let current = calendar_host_openings_current(settings, today);
  let initial = calendar_openings_to_ranges(current, dates);
  async function changed(ranges) {
    async function hours_save() {
      let saved = await calendar_api_call(
        "POST",
        "schedule_save",
        {
          from_day: today,
          openings: calendar_ranges_to_openings(ranges, dates),
        },
        key,
      );
      let told = saved.body.ok
        ? "Saved."
        : equal(saved.body.reason, "no_host")
          ? "Save your booking link name in About you first."
          : "Could not save. Try again.";
      return told;
    }
    await app_shared_toast_saving(hours_save);
  }
  week_calendar(area, dates, initial, changed, true);
}
