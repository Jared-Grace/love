import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_stroke_advance(state, point, tolerance_squared) {
  "Say where along its stroke the pointer now is, mark everything between there and where it was as drawn, and count a slip if the pointer is nowhere on the stroke at all.";
  "★ IT LOOKS BOTH WAYS. A stroke may be traced in either direction, and a trace may turn round in the middle and come back, because direction is a matter of how a thing is drawn and not of what is drawn. The cow is the same cow whichever way round your hand went. What is fixed is Scripture's shape; the manner of the drawing is the messenger's, and a rule forcing one direction would be a rule this palette has no authority to make.";
  "★ IT MOVES TO THE NEAREST SAMPLE IN THE WINDOW AND NOT TO THE FURTHEST ONE INSIDE THE CORRIDOR, and the difference between those two is the whole correctness of the thing. Samples sit closer together than the corridor is wide, so several of them are always inside it, and taking the furthest walks the trace forward by a step on every report the pointer sends - whether or not the hand moved at all. A browser sends those reports far faster than a hand crosses a shape, so the trace outran the hand, arrived at a corner already several units past where the hand was, and counted the corner it was about to draw as a wandering. Measured on one gaunt cow: five slips on a trace that followed the line exactly. Taking the nearest instead makes the trace say where the hand IS, which can never be ahead of it, and the same trace slips none.";
  "The window is what makes a fast drag work. A pointer reports where it is, not where it went, so a quick sweep arrives many samples further on than the last report; without a window to search, the trace could only step one sample per report and the stroke would feel stuck rather than fast. The window is counted in samples, and samples are laid at even distances, so it reaches further on a long stroke than on a short one - which is the behaviour wanted anyway.";
  "Searching for the nearest is also what makes a fold safe. A cow's leg is drawn down one side and up the other, bringing two far-apart parts of the line within a few units of each other, and the far side of the fold is inside the window; but the hand is standing ON the near side, so the near side is nearer, and the leg cannot be skipped.";
  "Everything passed over is marked drawn, rather than only the sample landed on, so a sweep that crosses several samples in one report leaves no unmarked gaps behind it. That is also what lets a stroke be finished in pieces: the marks are kept per sample and not as one run, so a half drawn one way and a half drawn the other join up by themselves.";
  "A slip is counted once for each leaving of the corridor and not once for each report while outside it, so it measures how often the hand left the line rather than how long the pointer was made to sit still off it. That count is the whole scoring axis: NUM12:8 ranks a plain word above a riddle, and a stroke traced badly is what a riddle is made of here.";
  let samples = state.samples;
  let count = list_size(samples);
  let last = count - 1;
  let reached = state.index;
  let nearest = bible_dream_point_gap_squared(point, samples[state.index]);
  let low = state.index - 12;
  if (low < 0) {
    low = 0;
  }
  let high = state.index + 12;
  if (high > last) {
    high = last;
  }
  let index = low;
  while (index <= high) {
    let gap = bible_dream_point_gap_squared(point, samples[index]);
    if (gap < nearest) {
      nearest = gap;
      reached = index;
    }
    index = index + 1;
  }
  if (nearest > tolerance_squared) {
    if (state.off) {
      return;
    }
    state.off = true;
    state.slips = state.slips + 1;
    return;
  }
  state.off = false;
  let from = state.index;
  let to = reached;
  if (to < from) {
    from = reached;
    to = state.index;
  }
  let marking = from;
  while (marking <= to) {
    state.covered[marking] = true;
    marking = marking + 1;
  }
  state.index = reached;
  let undrawn = 0;
  let counting = 0;
  while (counting < count) {
    if (state.covered[counting]) {
      counting = counting + 1;
      continue;
    }
    undrawn = undrawn + 1;
    counting = counting + 1;
  }
  if (undrawn === 0) {
    state.done = true;
  }
}
