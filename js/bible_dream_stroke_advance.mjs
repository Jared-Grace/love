import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_stroke_advance(state, point, tolerance_squared) {
  "Say where along its stroke the pointer now is, move the trace to exactly there, and count a slip if the pointer is nowhere on it.";
  "It looks FORWARD only. A trace can never be pushed back down a stroke by wandering, because the shape being revealed is Scripture's and not the player's, and a line already given should not be taken away again by an unsteady hand.";
  "★ IT MOVES TO THE NEAREST SAMPLE AHEAD AND NOT TO THE FURTHEST ONE INSIDE THE CORRIDOR, and the difference between those two is the whole correctness of the thing. Samples sit closer together than the corridor is wide, so several of them ahead are always inside it, and taking the furthest walks the trace forward by a step on every report the pointer sends - whether or not the hand moved at all. A browser sends those reports far faster than a hand crosses a shape, so the trace outran the hand, arrived at a corner already several units past where the hand was, and counted the corner it was about to draw as a wandering. Measured on one gaunt cow: five slips on a trace that followed the line exactly. Taking the nearest instead makes the trace say where the hand IS, which can never be ahead of it, and the same trace slips none.";
  "The window is what makes a fast drag work. A pointer reports where it is, not where it went, so a quick sweep arrives many samples further on than the last report; without a window to search the trace could only step one sample per report and the stroke would feel stuck rather than fast. The window is counted in samples, and samples are laid at even distances, so it reaches further on a long stroke than on a short one - which is the behaviour wanted anyway.";
  "Searching for the nearest is also what makes a fold safe. A cow's leg is drawn down one side and up the other, bringing two far-apart parts of the line within a few units of each other, and the far side of the fold is inside the window; but the hand is standing ON the near side, so the near side is nearer, and the leg cannot be skipped.";
  "A slip is counted once for each leaving of the corridor and not once for each report while outside it, so it measures how often the hand left the line rather than how long the pointer was made to sit still off it. That count is the whole scoring axis: NUM12:8 ranks a plain word above a riddle, and a stroke traced badly is what a riddle is made of here.";
  let samples = state.samples;
  let left = list_size(samples);
  let last = subtract(left, 1);
  let reached = state.index;
  let nearest = bible_dream_point_gap_squared(point, samples[state.index]);
  let look = state.index + 12;
  if (greater_than(look, last)) {
    look = last;
  }
  let index = state.index + 1;
  while (less_than_equal(index, look)) {
    let gap = bible_dream_point_gap_squared(point, samples[index]);
    if (less_than(gap, nearest)) {
      nearest = gap;
      reached = index;
    }
    index = index + 1;
  }
  if (greater_than(nearest, tolerance_squared)) {
    if (state.off) {
      return;
    }
    state.off = true;
    state.slips = state.slips + 1;
    return;
  }
  state.off = false;
  state.index = reached;
  if (greater_than_equal(reached, last)) {
    state.done = true;
  }
}
