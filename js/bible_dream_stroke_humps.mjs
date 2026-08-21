import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { bible_dream_samples_turn_signs } from "./bible_dream_samples_turn_signs.mjs";
import { bible_dream_hump_run_keep } from "./bible_dream_hump_run_keep.mjs";
export function bible_dream_stroke_humps(samples) {
  "Find the bumps in a shape - each stretch of it that bends the same way for long enough to be seen as a feature - and say where each one starts, where it ends, and which way it points.";
  "A bump is a run of one sign and nothing more than that. Reading it that way means the shape is asked what it has rather than told what to have: the humps of a cow's back and the swell of an ear come out of the same two loops, and a shape nobody anticipated gets its features found anyway. Anything built on this is therefore ornament OF the passage's own line, derived from it, and not decoration laid over the top of it.";
  "The run being closed by the sample after it means the last run has nobody to close it, so it is closed once more after the loop. Leaving that out silently drops the final bump of every shape - and a closed shape like a cow, drawn to end where it began, hides the loss completely because the missing bump sits next to a kept one.";
  let signs = bible_dream_samples_turn_signs(samples);
  let count = list_size(signs);
  let humps = [];
  let run_first = 0;
  let run_sign = 0;
  let index = 0;
  while (less_than(index, count)) {
    let sign = signs[index];
    if (equal(sign, run_sign)) {
      index = index + 1;
      continue;
    }
    let last = subtract(index, 1);
    bible_dream_hump_run_keep(humps, samples, run_sign, run_first, last);
    run_sign = sign;
    run_first = index;
    index = index + 1;
  }
  let last2 = subtract(count, 1);
  bible_dream_hump_run_keep(humps, samples, run_sign, run_first, last2);
  return humps;
}
