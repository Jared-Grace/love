import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_ranges_to_openings(ranges, dates) {
  arguments_assert(arguments, 2);
  ("The weekly grid's ranges ({day, start, end}, half-hour slots counted inclusive) turned back into weekly free hours as the database keeps them: {weekday, start_minute, end_minute}, weekday 0 = Sunday.");
  ("dates are the seven days the grid shows, Sunday first; a range on a day outside them names no weekday and is left out.");
  let openings = [];
  for (let range of ranges) {
    let weekday = dates.indexOf(range.day);
    if (less_than(weekday, 0)) {
      continue;
    }
    openings.push({
      weekday,
      start_minute: multiply(range.start, 30),
      end_minute: multiply(range.end + 1, 30),
    });
  }
  return openings;
}
