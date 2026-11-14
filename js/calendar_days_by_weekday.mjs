import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
export function calendar_days_by_weekday(months) {
  arguments_assert(arguments, 1);
  ("The dates from ",
    fn_name("calendar_slots_by_month"),
    ' regrouped by the reader\'s own day of the week, Sunday first: [{label: "Monday", days: [{label, times}]}]. Every weekday the dates touch is kept, even one whose dates all have no open hour, so the page can say it is unavailable.');
  let groups = [];
  for (let month of months) {
    for (let day of month.days) {
      function lambda(g) {
        let eq = equal(g.number, day.number);
        return eq;
      }
      let group = groups.find(lambda);
      if (equal(group, undefined)) {
        group = {
          number: day.number,
          label: day.weekday,
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
