import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_stroke_advance(state, point, tolerance_squared) {
  "Move a trace as far along its stroke as the pointer's present position allows, and count a slip if the pointer has left the corridor.";
  "It looks FORWARD only. A trace can never be pushed back down a stroke by wandering, because the shape being revealed is Scripture's and not the player's, and a line already given should not be taken away again by an unsteady hand.";
  "The lookahead is what makes a fast drag work. A pointer reports where it is, not where it went, so a quick sweep arrives several samples further on than the last one; without a look forward the trace would stall at the first gap it could not step over and the stroke would feel stuck rather than fast.";
  "A slip is counted once for each leaving of the corridor and not once for each report while outside it, so it measures how often the hand left the line rather than how long the pointer was made to sit still off it. That count is the whole scoring axis: NUM12:8 ranks a plain word above a riddle, and a stroke traced badly is what a riddle is made of here.";
  let samples = state.samples;
  let last = list_size(samples) - 1;
  let reached = state.index;
  let look = state.index + 24;
  if (look > last) {
    look = last;
  }
  let index = state.index + 1;
  while (index <= look) {
    let gap = bible_dream_point_gap_squared(point, samples[index]);
    if (gap <= tolerance_squared) {
      reached = index;
    }
    index = index + 1;
  }
  if (reached > state.index) {
    state.index = reached;
    state.off = false;
    if (reached >= last) {
      state.done = true;
    }
    return;
  }
  let here = bible_dream_point_gap_squared(point, samples[state.index]);
  if (here <= tolerance_squared) {
    return;
  }
  if (state.off) {
    return;
  }
  state.off = true;
  state.slips = state.slips + 1;
}
