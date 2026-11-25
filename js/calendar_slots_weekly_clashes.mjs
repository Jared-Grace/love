import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { calendar_meeting_next_utc } from "./calendar_meeting_next_utc.mjs";
import { list_map } from "./list_map.mjs";
export function calendar_slots_weekly_clashes(slots, meetings, timezone) {
  arguments_assert(arguments, 3);
  ("Each open slot with weekly_clashes added: the meetings already booked at the same weekday and minute on a later day, soonest first, each {start_utc, weekly}. These are exactly the meetings that make the server refuse this slot every week (",
    fn_name("calendar_db_book"),
    ': weekly, same weekday and start minute, day on or after), so the page can shut the every-week choice before a guest presses Book, and say which dates are in the way (human, 2026-11-25: "if others have scheduled meetings at this time in the future, then the future meetings that are not available should be listed").');
  ("weekly is true for a meeting that itself repeats - from its day on, every week is taken - and false for a single one, which takes only its own date.");
  function slot_clashes(s) {
    let weekday = new Date(s.day + "T00:00:00Z").getUTCDay();
    function later_same(m) {
      let r =
        equal(m.weekday, weekday) &&
        equal(m.start_minute, s.start_minute) &&
        greater_than(m.day, s.day);
      return r;
    }
    function by_day(a, b) {
      let r2 = less_than(a.day, b.day)
        ? -1
        : greater_than(a.day, b.day)
          ? 1
          : 0;
      return r2;
    }
    function clash_of(m) {
      let at = calendar_meeting_next_utc(
        {
          day: m.day,
          host_timezone: timezone,
          start_minute: m.start_minute,
          weekly: 0,
        },
        s.start_utc,
      );
      let r3 = {
        start_utc: at,
        weekly: equal(m.weekly, 1),
      };
      return r3;
    }
    let later = meetings.filter(later_same).sort(by_day);
    let r4 = {
      ...s,
      weekly_clashes: list_map(later, clash_of),
    };
    return r4;
  }
  let r5 = list_map(slots, slot_clashes);
  return r5;
}
