import { bible_dream_counter_arc } from "./bible_dream_counter_arc.mjs";
export function bible_dream_hump_counter_paths(samples, hump) {
  "Answer one bump with two smaller ones facing the other way, one off each of its ends, and hand back the two shapes to draw.";
  "★ EVERY NUMBER HERE COMES OUT OF THE BUMP ITSELF. How wide the counters are is a share of the bump's own width and how deep they bow is a share of its own depth, so a shallow swell is answered quietly and a deep one loudly, and the ornament of a shape is a reading of that shape rather than a fixed pattern stamped onto it. That is the difference between an accompaniment and a backing track: the first is derived from what was played.";
  "Both counters are laid along the straight line joining the bump's ends and not along the curve going into and out of it. The curve at an end is bending - it is the end of a bend - so following it would carry the ornament round in the direction the bump was already going and the answer would read as more of the same rather than as a reply to it.";
  "A bump whose ends have all but met gets no counters, because there is no direction along it to put them on. That is a loop closing on itself, and the honest answer to it is silence.";
  let start = samples[hump.first];
  let end = samples[hump.last];
  let sideways = end.x - start.x;
  let up = end.y - start.y;
  let span = Math.sqrt(sideways * sideways + up * up);
  if (span < 4) {
    return [];
  }
  let along = { x: sideways / span, y: up / span };
  let width = span * 0.55;
  let bulge = hump.facing.reach * 0.8;
  let before = { x: start.x - along.x * width, y: start.y - along.y * width };
  let after = { x: end.x + along.x * width, y: end.y + along.y * width };
  let leading = bible_dream_counter_arc(before, start, hump.facing, bulge);
  let trailing = bible_dream_counter_arc(end, after, hump.facing, bulge);
  return [leading, trailing];
}
