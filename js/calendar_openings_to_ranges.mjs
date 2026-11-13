import { floor } from "./floor.mjs";
import { ceil } from "./ceil.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_openings_to_ranges(openings, dates) {
  arguments_assert(arguments, 2);
  ("A host's weekly free hours, as the database keeps them ({weekday, start_minute, end_minute}, weekday 0 = Sunday), turned into the ranges the weekly grid draws: {day, start, end} over the seven dates shown, start and end being half-hour slots counted inclusive.");
  ("dates are the seven days the grid shows, Sunday first, so weekday is the place in that list.");
  let ranges = [];
  for (let opening of openings) {
    let day = dates[opening.weekday];
    let p = divide(opening.start_minute, 30);
    let start = floor(p);
    let p2 = divide(opening.end_minute, 30);
    let left = ceil(p2);
    let end = subtract(left, 1);
    if (equal(day, undefined) || less_than(end, start)) {
      continue;
    }
    ranges.push({
      day,
      start,
      end,
    });
  }
  return ranges;
}
