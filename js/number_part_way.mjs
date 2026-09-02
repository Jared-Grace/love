import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function number_part_way(start, end, fraction) {
  arguments_assert(arguments, 3);
  ("The number a given fraction of the way from one number to another - the first at");
  ("nought, the second at one, and the straight line between them for everything else.");
  ("Named because a fraction of the way is written the same three ways every time it is");
  ("wanted: the distance between them, then that much of it, then that much added back on.");
  ("Spelt out at each site it reads as three lines of arithmetic that say nothing about what");
  ("is being moved, and the one line that says it is the name.");
  ("It is not held between the two ends. A fraction past one carries on past the second");
  ("number, which is what a curve that overshoots and settles back needs, and clamping here");
  ("would quietly straighten every one of those without saying so.");
  let span = subtract(end, start);
  let gone = multiply(span, fraction);
  let r = add(start, gone);
  return r;
}
