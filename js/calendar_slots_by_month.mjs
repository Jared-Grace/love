import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function calendar_slots_by_month(slots, now_iso) {
  arguments_assert(arguments, 2);
  ('The open hours grouped for picking in three steps - month, then date, then time - each said in the reader\'s own clock and language: [{label: "November 2026", days: [{label: "Sun, Nov 15", number: 0, weekday: "Sunday", times: [{label: "1:00 PM", slot}]}]}].');
  ("Grouped by the reader's own date, not the host's, since that is the day the reader will be on the call. slots come soonest first, so months, days and times keep that order.");
  ("Every date the booking window touches is listed - from 24 hours after now_iso to 14 days after it, the window the server offers - even one with no open hour, whose times is empty, so the page can say that date is unavailable rather than leave it out.");
  let months = [];
  function day_get(at) {
    let month_label = at.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    });
    let day_label = at.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    function lambda(m) {
      let eq = equal(m.label, month_label);
      return eq;
    }
    let month = months.find(lambda);
    if (equal(month, undefined)) {
      month = {
        label: month_label,
        days: [],
      };
      months.push(month);
    }
    function lambda2(d) {
      let eq2 = equal(d.label, day_label);
      return eq2;
    }
    let day = month.days.find(lambda2);
    if (equal(day, undefined)) {
      day = {
        label: day_label,
        number: at.getDay(),
        weekday: at.toLocaleDateString(undefined, {
          weekday: "long",
        }),
        times: [],
      };
      month.days.push(day);
    }
    return day;
  }
  let now_ms = new Date(now_iso).getTime();
  let left = multiply(24, 60);
  let left2 = multiply(left, 60);
  let first = new Date(now_ms + multiply(left2, 1000));
  let left3 = multiply(14, 24);
  let left4 = multiply(left3, 60);
  let left5 = multiply(left4, 60);
  let end_ms = now_ms + multiply(left5, 1000);
  let v = first.getFullYear();
  let v2 = first.getMonth();
  let v3 = first.getDate();
  let date = new Date(v, v2, v3);
  while (less_than(date.getTime(), end_ms)) {
    day_get(date);
    let v4 = date.getFullYear();
    let v5 = date.getMonth();
    date = new Date(v4, v5, date.getDate() + 1);
  }
  for (let slot of slots) {
    let at = new Date(slot.start_utc);
    let time_label = at.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });
    day_get(at).times.push({
      label: time_label,
      slot,
    });
  }
  return months;
}
