import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { bible_dream_hump_facing } from "./bible_dream_hump_facing.mjs";
import { not } from "./not.mjs";
export function bible_dream_hump_run_keep(humps, samples, sign, first, last) {
  "Take one run of samples that all bend the same way and add it to the list of bumps, unless it is too small or too flat or not a bend at all.";
  "Four separate refusals, and each of them is a different way of not being a bump. A run of no bend is a straight stretch. A run of a handful of samples is the rounding in the sampling rather than a shape anybody drew. A run that stands a fraction of nothing off its own chord is the rounding again. A run that bends steadily but barely leaves its own chord in proportion to how wide it is, is a long gentle sweep, which a reader sees as the line itself and not as a feature of it.";
  "★ HOW DEEP A BUMP HAS TO BE IS A SHARE OF ITS OWN WIDTH AND NOT A FIXED DISTANCE. This was first written as a fixed one, and measured on the page: the river and one cow were ornamented and every other shape in the dream got nothing at all, because a river drawn four hundred units wide and an ear of grain drawn fifty have bumps that differ by the same fifteen times. Nothing went red - the ornament simply was not there, which looks exactly like a shape that has no bumps. Anything judging a shape's own features has to be scale-free or it is really judging the shape's size.";
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
  let b = multiply(facing.span, 0.12);
  if (less_than(facing.reach, b)) {
    return;
  }
  list_add(humps, {
    first,
    last,
    facing,
  });
}
