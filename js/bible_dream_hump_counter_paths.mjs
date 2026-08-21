import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { bible_dream_counter_arc } from "./bible_dream_counter_arc.mjs";
export function bible_dream_hump_counter_paths(samples, hump) {
  "Answer one bump with two smaller ones facing the other way, one off each of its ends, and hand back the two shapes to draw.";
  "★ EVERY NUMBER HERE COMES OUT OF THE BUMP ITSELF. How wide the counters are is a share of the bump's own width and how deep they bow is a share of its own depth, so a shallow swell is answered quietly and a deep one loudly, and the ornament of a shape is a reading of that shape rather than a fixed pattern stamped onto it. That is the difference between an accompaniment and a backing track: the first is derived from what was played.";
  "Both counters are laid along the straight line joining the bump's ends and not along the curve going into and out of it. The curve at an end is bending - it is the end of a bend - so following it would carry the ornament round in the direction the bump was already going and the answer would read as more of the same rather than as a reply to it.";
  "The width across the bump is taken from the bump rather than worked out again here, because it was already measured to decide the thing was a bump at all, and two places computing one distance is two places to get it wrong in.";
  "A bump whose ends have all but met gets no counters, because there is no direction along it to put them on. That is a loop closing on itself, and the honest answer to it is silence. The bar for that is set as low as it can go without dividing by nothing, since it is guarding against a division and not judging whether a shape deserves ornament - which is judged elsewhere, and in a way that does not depend on how big the drawing is.";
  let start = samples[hump.first];
  let end = samples[hump.last];
  let sideways = subtract(end.x, start.x);
  let up = subtract(end.y, start.y);
  let span = hump.facing.span;
  if (less_than(span, 0.5)) {
    let r = [];
    return r;
  }
  let along = {
    x: divide(sideways, span),
    y: divide(up, span),
  };
  let width = multiply(span, 0.55);
  let bulge = multiply(hump.facing.reach, 0.8);
  let right = multiply(along.x, width);
  let right2 = multiply(along.y, width);
  let before = {
    x: subtract(start.x, right),
    y: subtract(start.y, right2),
  };
  let after = {
    x: end.x + multiply(along.x, width),
    y: end.y + multiply(along.y, width),
  };
  let leading = bible_dream_counter_arc(before, start, hump.facing, bulge);
  let trailing = bible_dream_counter_arc(end, after, hump.facing, bulge);
  let r2 = [leading, trailing];
  return r2;
}
