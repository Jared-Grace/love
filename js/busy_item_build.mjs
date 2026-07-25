import { equal } from "./equal.mjs";
export function busy_item_build(kind, span, date) {
  "make one busy calendar item from a chosen time range: a weekly item keeps the weekday, while one-time and monthly items keep the picked date; every item keeps the start and end pieces";
  let weekly = equal(kind, "weekly");
  let item = weekly
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
