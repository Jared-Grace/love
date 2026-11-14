import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function calendar_days_by_weekday(months) {
  arguments_assert(arguments, 1);
  ("The dates from ",
    fn_name("calendar_slots_by_month"),
    ' regrouped by the reader\'s own day of the week, Sunday first: [{label: "Monday", days: [{label, times}]}]; a weekday with no open hour is left out.');
  let groups = [];
  for (let month of months) {
    for (let day of month.days) {
      let at = new Date(day.times[0].slot.start_utc);
      let number = at.getDay();
      function lambda(g) {
        let eq = equal(g.number, number);
        return eq;
      }
      let group = groups.find(lambda);
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
  function lambda2(a, b) {
    let difference = subtract(a.number, b.number);
    return difference;
  }
  groups.sort(lambda2);
  return groups;
}
