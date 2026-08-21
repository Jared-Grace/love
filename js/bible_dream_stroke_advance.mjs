import { bible_dream_sample_window } from "./bible_dream_sample_window.mjs";
import { each } from "./each.mjs";
import { bible_dream_sample_arc } from "./bible_dream_sample_arc.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_stroke_advance(state, point, tolerance_squared) {
  "Say where along its stroke the pointer now is, mark everything between there and where it was as drawn, and count a slip if the pointer is nowhere on the stroke at all.";
  "★ IT LOOKS BOTH WAYS. A stroke may be traced in either direction, and a trace may turn round in the middle and come back, because direction is a matter of how a thing is drawn and not of what is drawn. The cow is the same cow whichever way round your hand went. What is fixed is Scripture's shape; the manner of the drawing is the messenger's, and a rule forcing one direction would be a rule this palette has no authority to make.";
  "★ IT MOVES TO THE NEAREST SAMPLE IN THE WINDOW AND NOT TO THE FURTHEST ONE INSIDE THE CORRIDOR, and the difference between those two is the whole correctness of the thing. Samples sit closer together than the corridor is wide, so several of them are always inside it, and taking the furthest walks the trace forward by a step on every report the pointer sends - whether or not the hand moved at all. A browser sends those reports far faster than a hand crosses a shape, so the trace outran the hand, arrived at a corner already several units past where the hand was, and counted the corner it was about to draw as a wandering. Measured on one gaunt cow: five slips on a trace that followed the line exactly. Taking the nearest instead makes the trace say where the hand IS, which can never be ahead of it, and the same trace slips none.";
  "The window is what makes a fast drag work. A pointer reports where it is, not where it went, so a quick sweep arrives many samples further on than the last report; without a window to search, the trace could only step one sample per report and the stroke would feel stuck rather than fast. The window is counted in samples, and samples are laid at even distances, so it reaches further on a long stroke than on a short one - which is the behaviour wanted anyway.";
  "★ THE WINDOW AND THE MARKING BOTH GO ROUND WHEN THE STROKE IS A RING, and without that the freedom to begin anywhere was only half given. A cow's outline closes, so the point where its samples happen to be numbered from is nowhere in particular on the cow; a search and a marking that both stopped there let a player begin anywhere and then walk into an invisible wall. It looked like an ordinary failure to trace well - the shape simply refused to finish - which is why it survived a verification that only ever started at sample zero.";
  "Searching for the nearest is also what makes a fold safe. A cow's leg is drawn down one side and up the other, bringing two far-apart parts of the line within a few units of each other, and the far side of the fold is inside the window; but the hand is standing ON the near side, so the near side is nearer, and the leg cannot be skipped.";
  "Everything passed over is marked drawn, rather than only the sample landed on, so a sweep that crosses several samples in one report leaves no unmarked gaps behind it. That is also what lets a stroke be finished in pieces: the marks are kept per sample and not as one run, so a half drawn one way and a half drawn the other join up by themselves.";
  "★ THE DISTANCE IT FINDS IS FOR JUDGING AND IS HANDED TO NOBODY. It used to be kept on the stroke for the fading of the hand's own mark to read, and that was wrong in a way nothing could see: this search covers only a window of samples around where the trace stands, and when the hand leaves the corridor the trace stops, so the window freezes and every later distance is measured from the place of departure rather than from the shape. What the fading wants is a search of the whole stroke, which is its own question and now has its own name.";
  "★ A TRACE THAT IS ALREADY LOST LOOKS AT THE WHOLE STROKE INSTEAD OF THE WINDOW, AND ONLY THEN. While the hand is on the line the window is what keeps the trace honest, and widening it would let a fast sweep leap a fold and claim the half it never touched. Once the hand has gone the window has nothing left to protect: the trace is standing where the hand departed, which is not where the hand is, so a search around it can only ever answer about the past. Handing that one case to a whole-stroke search is what lets a hand leave the shape, come down on a far part of it, and go on filling in from there.";
  "A slip is counted once for each leaving of the corridor and not once for each report while outside it, so it measures how often the hand left the line rather than how long the pointer was made to sit still off it. That count is the whole scoring axis: NUM12:8 ranks a plain word above a riddle, and a stroke traced badly is what a riddle is made of here.";
  let samples = state.samples;
  let count = list_size(samples);
  let reached = state.index;
  let nearest = bible_dream_point_gap_squared(point, samples[state.index]);
  let near_numbers = bible_dream_sample_window(
    state.index,
    12,
    count,
    state.loop,
  );
  function each_near(index) {
    let gap = bible_dream_point_gap_squared(point, samples[index]);
    if (less_than(gap, nearest)) {
      nearest = gap;
      reached = index;
    }
  }
  each(near_numbers, each_near);
  if (greater_than(nearest, tolerance_squared)) {
    if (state.off) {
      bible_dream_stroke_land_again(state, point, tolerance_squared);
      return;
    }
    state.off = true;
    state.slips = state.slips + 1;
    return;
  }
  state.off = false;
  let arc = bible_dream_sample_arc(state.index, reached, count, state.loop);
  function each_marking(index) {
    state.covered[index] = true;
  }
  each(arc, each_marking);
  state.index = reached;
  let undrawn = 0;
  let counting = 0;
  while (less_than(counting, count)) {
    if (state.covered[counting]) {
      counting = counting + 1;
      continue;
    }
    undrawn = undrawn + 1;
    counting = counting + 1;
  }
  if (equal(undrawn, 0)) {
    state.done = true;
  }
}
