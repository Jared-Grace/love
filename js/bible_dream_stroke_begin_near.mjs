import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
export function bible_dream_stroke_begin_near(
  states,
  point,
  tolerance_squared,
) {
  "Find the unfinished stroke passing nearest to where the pointer went down, put its trace at that exact place along itself, and hand the stroke back - or hand back nothing, if the pointer went down away from all of them.";
  "★ IT LOOKS AT EVERY POINT OF EVERY STROKE AND NOT AT THEIR BEGINNINGS. A stroke has a first sample and a last one because a list has to be written down in some order, but the shape does not: the outline of a cow is a loop, and a loop has no beginning. Being made to find one end of it before drawing was a rule of the list leaking out into the game, and Scripture puts no such rule on the messenger - it fixes what is said and leaves the manner of saying it. So you may put your hand down on the belly and work outwards from there.";
  "Nothing here prefers one stroke over another, and nothing here knows what order the strokes were laid out in. Which stroke goes first is the player's freedom in this palette, so the only thing allowed to choose is where the pointer actually is.";
  "It is the one place a trace is moved without any drawing being done, which is why a press alone marks nothing. The sample it settles on is covered by the first drag, not by the press, so a hand put down and lifted again leaves the dream exactly as it was.";
  let chosen = null;
  let landing = 0;
  let nearest = tolerance_squared;
  function each_state(state) {
    if (state.done) {
      return;
    }
    let near = {
      x: subtract(point.x, state.x),
      y: subtract(point.y, state.y),
    };
    let samples = state.samples;
    let count = list_size(samples);
    let index = 0;
    while (less_than(index, count)) {
      let gap = bible_dream_point_gap_squared(near, samples[index]);
      if (less_than(gap, nearest)) {
        nearest = gap;
        chosen = state;
        landing = index;
      }
      index = index + 1;
    }
  }
  each(states, each_state);
  if (chosen) {
    chosen.index = landing;
  }
  return chosen;
}
