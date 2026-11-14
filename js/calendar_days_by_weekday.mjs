import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function calendar_days_by_weekday(months) {
  arguments_assert(arguments, 1);
  ("The dates from ",
    "calendar_slots_by_month",
    ' regrouped by the reader\'s own day of the week, Sunday first: [{label: "Monday", days: [{label, times}]}]; a weekday with no open hour is left out.');
  let groups = [];
  for (let month of months) {
    for (let day of month.days) {
      let at = new Date(day.times[0].slot.start_utc);
      let number = at.getDay();
      let group = groups.find(function lambda(g) {
        return equal(g.number, number);
      });
      if (equal(group, undefined)) {
        group = {
          number,
          label: at.toLocaleDateString(undefined, {
            weekday: "long",
          }),
          days: [],
        };
        groups.push(group);
      }
      group.days.push(day);
    }
  }
  groups.sort(function lambda2(a, b) {
    return a.number - b.number;
  });
  return groups;
}
