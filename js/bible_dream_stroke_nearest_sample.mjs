import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_stroke_nearest_sample(state, point) {
  "Find the sample of a stroke that a point is closest to, looking at every one of them, and say both which it is and how far off it was.";
  "★ IT SEARCHES THE WHOLE STROKE, WHICH IS THE ONE THING THE ADVANCING SEARCH CANNOT DO. Advancing looks only at a short window of samples around where the trace is standing, because a trace that could jump anywhere on the shape would let a hand skip half of it. That window is right for carrying a trace forward and wrong for every other question, and there are now two of those: how far the hand is from the shape at all, and where on the shape a hand that left the corridor has come back down.";
  "It answers with both the place and the distance because its two askers want one each, and asking twice would mean walking the samples twice for numbers that were both already in hand.";
  "The whole scan costs one pass over a few hundred distances between two points for each report a pointer sends, which is nothing beside what a browser is already doing to send the report.";
  let samples = state.samples;
  let count = list_size(samples);
  let nearest = bible_dream_point_gap_squared(point, samples[0]);
  let found = 0;
  let index = 1;
  while (less_than(index, count)) {
    let gap = bible_dream_point_gap_squared(point, samples[index]);
    if (less_than(gap, nearest)) {
      nearest = gap;
      found = index;
    }
    index = index + 1;
  }
  let answer = {
    index: found,
    gap_squared: nearest,
  };
  return answer;
}
