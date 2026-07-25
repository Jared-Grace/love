import { date_weekday_short } from "./date_weekday_short.mjs";
export function busy_item_build(kind, span) {
  "make one busy calendar item from a chosen time range on a real date (span.day is a 'YYYY-MM-DD'): a daily item keeps only the time; a weekly item keeps that date's weekday; one-time and monthly items keep the date itself; every item keeps the start and end pieces";
  let daily = kind === "daily";
  let weekly = kind === "weekly";
  let item = daily
    ? {
        kind: kind,
        start: span.start,
        end: span.end,
      }
    : weekly
      ? {
          kind: kind,
          weekday: date_weekday_short(span.day),
          start: span.start,
          end: span.end,
        }
      : {
          kind: kind,
          date: span.day,
          start: span.start,
          end: span.end,
        };
  return item;
}
