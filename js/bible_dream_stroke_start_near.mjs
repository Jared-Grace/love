import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { each } from "./each.mjs";
export function bible_dream_stroke_start_near(states, point, tolerance_squared) {
  "Of all the strokes not yet finished, the one whose next-needed point is nearest to where the pointer went down - or nothing, if the pointer went down away from all of them.";
  "It offers the next-needed point rather than the stroke's beginning, so letting go part-way through and pressing again carries on from there. Tracing is a matter of a steady hand, and a game that threw away half a cow because a finger lifted would be scoring the mouse rather than the messenger.";
  "Nothing here prefers one stroke over another, and nothing here knows what order the strokes were laid out in. Which stroke goes first is the player's whole freedom in this palette, so the only thing allowed to choose is where the pointer actually is.";
  let chosen = null;
  let nearest = tolerance_squared;
  function each_state(state) {
    if (state.done) {
      return;
    }
    let local = { x: point.x - state.x, y: point.y - state.y };
    let wanted = state.samples[state.index];
    let gap = bible_dream_point_gap_squared(local, wanted);
    if (gap > nearest) {
      return;
    }
    nearest = gap;
    chosen = state;
  }
  each(states, each_state);
  return chosen;
}
