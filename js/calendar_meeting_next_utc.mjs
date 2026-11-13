import { arguments_assert } from "./arguments_assert.mjs";
import { date_time_zone_from_iso } from "./date_time_zone_from_iso.mjs";
import { date_time_zone_parse } from "./date_time_zone_parse.mjs";
export function calendar_meeting_next_utc(meeting, now_iso) {
  arguments_assert(arguments, 2);
  ("When a meeting next starts, in UTC, at or after now_iso; null for a one-time meeting already begun. A weekly meeting comes round on its weekday at the same clock time in the host's zone, so across a change of the clocks its UTC moment moves and the host's hour does not.");
  let moment_now = date_time_zone_from_iso(now_iso);
  let midnight_first = date_time_zone_parse(
    meeting.day,
    "yyyy-MM-dd",
    meeting.host_timezone,
  );
  let clock = {
    hour: Math.floor(meeting.start_minute / 60),
    minute: meeting.start_minute % 60,
  };
  let weeks = 0;
  if (meeting.weekly === 1) {
    let weeks_passed = Math.floor(
      moment_now.diff(midnight_first, "weeks").weeks,
    );
    weeks = Math.max(0, weeks_passed);
  }
  let moment_next = midnight_first
    .plus({
      weeks,
    })
    .set(clock);
  if (meeting.weekly === 1 && moment_next < moment_now) {
    moment_next = midnight_first
      .plus({
        weeks: weeks + 1,
      })
      .set(clock);
  }
  if (moment_next < moment_now) {
    return null;
  }
  return moment_next.toUTC().toISO();
}
