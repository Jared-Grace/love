import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { modulo } from "./modulo.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export function bible_dream_sample_window(index, reach, count, loop) {
  "Hand back the numbers of every sample within so many steps of a given one - running off both ends of a line, and carrying on round the far side of a loop.";
  "★ A LOOP HAS NO END TO STOP AT AND STOPPING AT ONE BREAKS THE WHOLE SHAPE. A cow's outline is a closed ring, and the place where its list of samples happens to begin is an accident of writing the list down, not a place on the cow. A search that clipped there would leave the trace unable to step across the seam: put a hand down anywhere on the ring, work one way round, and the trace stops dead at a point the drawing does not mark, with the whole rest of the ring never covered. Measured on one sleek cow, a trace begun near the seam covered twenty-five units of three hundred and fourteen and could not be finished at all.";
  "The first and last samples of a loop are the same point, so wrapping across the full count offers that point twice. That costs one wasted comparison and can never choose wrongly, because a point cannot be nearer to the hand than itself.";
  let numbers = [];
  let offset = subtract(0, reach);
  while (less_than_equal(offset, reach)) {
    let moved = index + offset;
    offset = offset + 1;
    if (loop) {
      let item = modulo(modulo(moved, count) + count, count);
      list_add(numbers, item);
      continue;
    }
    if (less_than(moved, 0)) {
      continue;
    }
    let b = subtract(count, 1);
    if (greater_than(moved, b)) {
      continue;
    }
    list_add(numbers, moved);
  }
  return numbers;
}
