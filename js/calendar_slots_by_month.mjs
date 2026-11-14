import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
export function calendar_slots_by_month(slots) {
  arguments_assert(arguments, 1);
  ('The open hours grouped for picking in three steps - month, then date, then time - each said in the reader\'s own clock and language: [{label: "November 2026", days: [{label: "Sun, Nov 15", times: [{label: "1:00 PM", slot}]}]}].');
  ("Grouped by the reader's own date, not the host's, since that is the day the reader will be on the call. slots come soonest first, so months, days and times keep that order.");
  let months = [];
  for (let slot of slots) {
    let at = new Date(slot.start_utc);
    let month_label = at.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    });
    let day_label = at.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    let time_label = at.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });
    let month = months[subtract(months.length, 1)];
    if (equal(month, undefined) || not(equal(month.label, month_label))) {
      month = {
        label: month_label,
        days: [],
      };
      months.push(month);
    }
    let day = month.days[subtract(month.days.length, 1)];
    if (equal(day, undefined) || not(equal(day.label, day_label))) {
      day = {
        label: day_label,
        times: [],
      };
      month.days.push(day);
    }
    day.times.push({
      label: time_label,
      slot,
    });
  }
  return months;
}
