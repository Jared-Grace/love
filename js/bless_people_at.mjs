import { arguments_assert } from "./arguments_assert.mjs";
import { and } from "./and.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
export function bless_people_at(people, x, y) {
  arguments_assert(arguments, 3);
  "Everybody standing on one tile.";
  "A list rather than one person, because a tile is a place and not a slot - two can share";
  "a doorway, and a crowd is what the top of the ladder is made of, so a drawing that could";
  "only show one per tile would put a ceiling on the game inside the renderer.";
  function lambda$person(person) {
    let left = equal(property_get(person, "x"), x);
    let right = equal(property_get(person, "y"), y);
    let same = and(left, right);
    return same;
  }
  let standing = list_filter(people, lambda$person);
  return standing;
}
