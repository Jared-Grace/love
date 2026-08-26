import { floor } from "./floor.mjs";
import { abs } from "./abs.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
export function audio_balance_curve(differences) {
  "$plain differences";
  "turn a measured lean into the correction for it - a slow gain shape for each side, sampled at even points, with the correction split evenly between the two so the recording as a whole neither rises nor falls";
  "IT IS SLOW ON PURPOSE AND THE SLOWNESS IS THE CORRECTION'S WHOLE CHARACTER. A lean that lasts for minutes is a fault in the mix; a lean that lasts a bar is the music. Averaging over a wide window before deciding leaves the second one alone, so an instrument answering from one side stays where it was written and only the standing bias moves.";
  "A SINGLE FIXED CORRECTION IS THE WRONG SHAPE AND WAS MEASURED TO BE. One gain chosen from the whole-recording average brought that average to nothing and made the worst moment worse, because it lifted the quiet side even in the stretches where that side was already the loud one. The lean has to be followed rather than summarised.";
  "THE CORRECTION IS SPLIT IN HALF ACROSS THE TWO SIDES rather than applied to one of them. Lifting one side alone fixes the balance and raises the whole recording as it goes, which then changes every loudness decision made after this one; taking half off one side and adding half to the other leaves the middle where it was.";
  "IT IS CLAMPED, because a window that catches a passage genuinely played on one side can ask for a correction large enough to be audible as a swing, and a correction that draws attention to itself has stopped being a repair.";
  "Where a sampling point falls in a stretch with nothing measurable in it the last decided correction is carried forward, so the shape stays continuous instead of snapping to nothing over a silence.";
  let smooth_seconds = 10;
  let step_seconds = 10;
  let clamp_decibels = 7;
  let seconds = [];
  let decibels_left = [];
  let decibels_right = [];
  if (equal(differences.length, 0)) {
    let r = {
      seconds,
      decibels_left,
      decibels_right,
      step_seconds,
    };
    return r;
  }
  let second_last = differences[subtract(differences.length, 1)].second;
  let p = divide(second_last, step_seconds);
  let step_count = floor(p) + 1;
  let carried_decibels = 0;
  for (
    let step_place = 0;
    less_than_equal(step_place, step_count);
    step_place++
  ) {
    let second_here = multiply(step_place, step_seconds);
    let total_difference = 0;
    let counted_here = 0;
    for (let one_difference of differences) {
      let n = subtract(one_difference.second, second_here);
      let a = abs(n);
      if (greater_than(a, smooth_seconds)) {
        continue;
      }
      total_difference = total_difference + one_difference.difference;
      counted_here = counted_here + 1;
    }
    if (greater_than(counted_here, 0)) {
      carried_decibels = divide(total_difference, counted_here);
    }
    let lean_decibels = carried_decibels;
    if (greater_than(lean_decibels, clamp_decibels)) {
      lean_decibels = clamp_decibels;
    }
    if (less_than(lean_decibels, -clamp_decibels)) {
      lean_decibels = -clamp_decibels;
    }
    seconds.push(second_here);
    let divided = divide(-lean_decibels, 2);
    decibels_left.push(divided);
    let divided2 = divide(lean_decibels, 2);
    decibels_right.push(divided2);
  }
  let r2 = {
    seconds,
    decibels_left,
    decibels_right,
    step_seconds,
  };
  return r2;
}
