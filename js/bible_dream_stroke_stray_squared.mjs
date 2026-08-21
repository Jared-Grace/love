import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { less_than } from "./less_than.mjs";
import { each } from "./each.mjs";
export function bible_dream_stroke_stray_squared(state, point) {
  "How far a point is from the stroke itself - the gap to the nearest sample anywhere on it, squared.";
  "★ IT LOOKS AT THE WHOLE STROKE AND THAT IS THE ONLY REASON IT EXISTS. The trace already works out a gap while it advances, but it only ever searches a short window of samples around where the trace is standing, which is right for judging and wrong for anything else. When a hand leaves the corridor the trace stops moving, so that window freezes where the hand departed, and every gap measured afterwards is a distance from the place it left rather than a distance from the shape. Measured on the vine of GEN40: a hand put down exactly on the far end of the ink, no distance at all from the stroke, was reported as far off as it is possible to be.";
  "What used the wrong number was the fading of the hand's own mark, and the fault showed there as an eraser: a hand that wandered wide and came back onto another part of the shape kept drawing at the faintest it goes, so returning to the line looked exactly like never finding it.";
  "The whole scan costs one pass over the stroke's samples for each report a pointer sends, which is a few hundred distances between two points and nothing beside what a browser is already doing to send the report.";
  let samples = state.samples;
  let nearest = bible_dream_point_gap_squared(point, samples[0]);
  function each_sample(sample) {
    let gap = bible_dream_point_gap_squared(point, sample);
    if (less_than(gap, nearest)) {
      nearest = gap;
    }
  }
  each(samples, each_sample);
  return nearest;
}
