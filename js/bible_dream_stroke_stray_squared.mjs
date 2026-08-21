import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { less_than } from "./less_than.mjs";
import { each } from "./each.mjs";
export function bible_dream_stroke_stray_squared(state, point) {
  "How far a point is from the stroke itself - the gap to the nearest sample anywhere on it, squared.";
  "★ IT LOOKS AT THE WHOLE STROKE AND THAT IS THE ONLY REASON IT EXISTS. The trace already works out a gap while it advances, but it only ever searches a short window of samples around where the trace is standing, which is right for judging and wrong for anything else. When a hand leaves the corridor the trace stops moving, so that window freezes where the hand departed, and every gap measured afterwards is a distance from the place it left rather than a distance from the shape. Measured on the vine of GEN40: a hand put down exactly on the far end of the ink, no distance at all from the stroke, was reported as far off as it is possible to be.";
  "What used the wrong number was the fading of the hand's own mark, and the fault showed there as an eraser: a hand that wandered wide and came back onto another part of the shape kept drawing at the faintest it goes, so returning to the line looked exactly like never finding it.";
  "The scan itself is not here any more. A second asker turned up - a trace that has left the corridor and needs to know WHERE on the shape the hand has come back down - and it wants the place rather than the distance out of the same walk over the same samples. So the walk went to its own name and this keeps only the half of its answer that fading asks for.";
  let found = bible_dream_stroke_nearest_sample(state, point);
  let gap_squared = found.gap_squared;
  return gap_squared;
}
