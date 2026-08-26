import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_sum } from "./list_sum.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_sizes_sections_least } from "./list_sizes_sections_least.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
import { number_gap } from "./number_gap.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_sizes_section_end_better_is } from "./list_sizes_section_end_better_is.mjs";
export function list_sizes_section_end_best(
  sizes,
  limit,
  start,
  left,
  ideal,
  preferred_ends,
) {
  "$plain sizes";
  "$plain limit";
  "$plain start";
  "$plain left";
  "$plain ideal";
  "$plain preferred_ends";
  "Where to end the section beginning at one place, given how many sections must still come after it and how far along the whole the ending would ideally fall - the best of the places that could end it rather than the first one that fits.";
  "FILLING TO THE CEILING IS THE THING THIS EXISTS NOT TO DO. Taking pieces until the next one would go over gives the fewest sections, which is why it decides how many there are, but it also puts every cut at an arbitrary word and leaves the final section a stub. Every place that could end the section is looked at instead, and the choice between them is made on where the writing marks an ending and on evenness.";
  "A candidate is only allowed if what is left after it can still be cut into the sections that must follow. That is settled by cutting the remainder the fewest-sections way and comparing the count, not by checking that the remaining characters would fit inside the remaining ceilings. The two are not the same question: pieces cannot be split, so a remainder well under the total room can still need one section more than there is left, and the looser test lets the search paint itself into a corner that only shows up at the last cut.";
  "The count of pieces left is checked as well as the room, because a section must hold something. A remainder that fits in one section is no use where three sections must still be filled.";
  "The scan stops as soon as the section overflows rather than running to the end. Adding a piece can only make it longer, so nothing past that point could be allowed, and stopping keeps the walk over a chapter short.";
  arguments_assert(arguments, 6);
  let count = list_size(sizes);
  let before = list_slice(sizes, 0, start);
  let taken = list_sum(before);
  let best = null;
  let best_distance = null;
  let best_preferred = false;
  let held = 0;
  let index = start;
  while (less_than(index, count)) {
    let size = list_get(sizes, index);
    held = add(held, size);
    let over = greater_than(held, limit);
    if (over) {
      return best;
    }
    let after = add(index, 1);
    let rest = list_slice(sizes, after, count);
    let lines_left = list_size(rest);
    let need = list_sizes_sections_least(rest, limit);
    let packs = less_than_equal(need, left);
    let b = less_than(lines_left, left);
    let lines = not(b);
    let allowed = and(packs, lines);
    if (allowed) {
      let cumulative = add(taken, held);
      let distance = number_gap(cumulative, ideal);
      let preferred = list_includes(preferred_ends, index);
      let better = list_sizes_section_end_better_is(
        preferred,
        distance,
        best_preferred,
        best_distance,
      );
      if (better) {
        best = index;
        best_distance = distance;
        best_preferred = preferred;
      }
    }
    index = after;
  }
  return best;
}
