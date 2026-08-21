import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { bible_dream_hump_facing } from "./bible_dream_hump_facing.mjs";
import { not } from "./not.mjs";
export function bible_dream_hump_run_keep(humps, samples, sign, first, last) {
  "Take one run of samples that all bend the same way and add it to the list of bumps, unless it is too small or too flat or not a bend at all.";
  "Three separate refusals, and each of them is a different way of not being a bump. A run of no bend is a straight stretch. A run of a handful of samples is the rounding in the sampling rather than a shape anybody drew. A run standing a fraction of nothing off its own chord is the rounding again.";
  "★ HOW DEEP A BUMP HAS TO BE IS NOT WHERE THIS DECISION IS MADE, THOUGH IT LOOKS LIKE THE OBVIOUS PLACE. A bar was put here demanding a bump stand off its own chord by a share of its width, and measured on the page it threw the river of GEN41 away - the very largest and plainest feature in the drawing - because a river IS a long shallow sweep, and shallowness relative to width is exactly what a river has. What was actually going wrong lived one function upstream, in how a bend was detected at all. The lesson is worth more than the bar was: a threshold that looks like it is selecting for quality is often selecting for something else entirely, and only measuring several shapes at once tells them apart.";
  "So the one measurement of depth left here is a floor low enough that nothing real approaches it. Its whole job is rounding, and it makes no judgement about whether a shape deserves ornament.";
  "The refusals matter more than they look, because everything downstream is ornament, and ornament hung on something the eye does not read as a feature does not look like decoration - it looks like a mistake.";
  if (equal(sign, 0)) {
    return;
  }
  let a = subtract(last, first);
  if (less_than(a, 6)) {
    return;
  }
  let facing = bible_dream_hump_facing(samples, first, last);
  if (not(facing)) {
    return;
  }
  if (less_than(facing.reach, 0.3)) {
    return;
  }
  list_add(humps, {
    first,
    last,
    facing,
  });
}
