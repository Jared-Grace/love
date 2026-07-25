export function busy_item_build(kind, range, date) {
  "make one busy calendar item from a chosen time range: a weekly item keeps the weekday, while one-time and monthly items keep the picked date; every item keeps the start and end pieces";
  let weekly = kind === "weekly";
  let item = weekly
    ? {
        kind: kind,
        day: range.day,
        start: range.start,
        end: range.end,
      }
    : {
        kind: kind,
        date: date,
        start: range.start,
        end: range.end,
      };
  return item;
}
