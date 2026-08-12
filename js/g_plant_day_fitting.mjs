import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function g_plant_day_fitting(left, met, room) {
  "Which people could be met next on a day that has this much room left in it - everybody who still has a conversation waiting, has not been met today, and whose next one is short enough to fit.";
  "It answers with POSITIONS rather than with people, because the caller is taking conversations off the lists it passed in and a position is what it needs to reach one.";
  "The three reasons somebody is not a candidate are kept apart on purpose. Spent out is permanent, met today lasts a day, and too long for the room lasts until the room empties - and the same person can go from the third to neither by being asked again on a day with more of it left.";
  let count = list_size(left);
  let fitting = [];
  for (let index = 0; less_than(index, count); index++) {
    let already = list_includes(met, index);
    if (already) {
      continue;
    }
    let lengths = left[index];
    let none = list_empty_is(lengths);
    if (none) {
      continue;
    }
    let turns = lengths[0];
    let fits = less_than_equal(turns, room);
    if (fits) {
      list_add(fitting, index);
    }
  }
  return fitting;
}
