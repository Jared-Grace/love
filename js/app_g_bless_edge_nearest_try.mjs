import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_g_bless_person_point } from "./app_g_bless_person_point.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_first } from "./list_first.mjs";
export function app_g_bless_edge_nearest_try(remaining, box) {
  arguments_assert(arguments, 2);
  ("Where on the screen the CLOSEST of the people still to pray for is standing - or nothing at all, when there are none of them left to find.");
  ("The closest one, because an arrow can only point one way and the nearest is the one the player reaches soonest. Sent to the furthest, or to whoever happens to come first in a list, a player would walk past three doors on the way to a fourth for no reason they could see.");
  ("Measured from the middle of the screen rather than from the player, and those are the same point except at the edges of the world. What is wanted is which way to LOOK, and the middle of what a player is looking at is the honest place to measure that from.");
  ("Distances are compared without ever being square-rooted. The root is a strictly rising function, so whichever distance is smallest is smallest either way, and the only thing the root would add is the chance of two of them rounding onto the same number.");
  ("The people are turned into places FIRST and the places are what gets sorted, so the game's own list of people is never reordered. Sorted in place, a list handed over to be read would come back rearranged, and everything else reading it - who is drawn first, who is asked about first - would quietly change with it.");
  ("Nothing rather than a fault when there are none left, because that is the ordinary state of a game at its very first move and again at its last: nobody has started a household yet, or every household is finished. Both are answers, and what asks this simply puts its arrow away.");
  let people = bless_view_people(remaining);
  let none = list_empty_is(people);
  if (none) {
    return null;
  }
  let x = property_get(box, "x");
  let y = property_get(box, "y");
  let points = list_map(people, app_g_bless_person_point);
  function point_distance(point) {
    let left = property_get(point, "x");
    let right = subtract(left, x);
    let left2 = property_get(point, "y");
    let down = subtract(left2, y);
    let across = multiply(right, right);
    let along = multiply(down, down);
    let far = add(across, along);
    return far;
  }
  list_sort_number_mapper(points, point_distance);
  let nearest = list_first(points);
  return nearest;
}
