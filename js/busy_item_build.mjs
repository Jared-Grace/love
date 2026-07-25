import { equal } from "./equal.mjs";
export function busy_item_build(kind, span, date) {
  "make one busy calendar item from a chosen time range: a daily item repeats every day and keeps only the time; a weekly item keeps the weekday; one-time and monthly items keep the picked date; every item keeps the start and end pieces";
  let daily = equal(kind, "daily");
  let weekly = equal(kind, "weekly");
  let item = daily
    ? {
        kind: kind,
        start: span.start,
        end: span.end,
      }
    : weekly
      ? {
          kind: kind,
          day: span.day,
          start: span.start,
          end: span.end,
        }
      : {
          kind: kind,
          date: date,
          start: span.start,
          end: span.end,
        };
  return item;
}
