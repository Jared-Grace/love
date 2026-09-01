import { multiply } from "./multiply.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_lag_enough(measured, count) {
  arguments_assert(arguments, 2);
  ("$plain measured");
  ("$plain count");
  ("Whether a run of sounds was answered well enough for the lag it produced to be worth keeping.");
  ("THREE QUARTERS IS THE LINE, AND IT IS A LINE RATHER THAN A JUDGEMENT BECAUSE TWO PLACES ASK IT. The screen asks it to decide whether to write the number into the lag box, and the sentence shown underneath asks it to decide which of two things to say. Those two must never disagree - a person told their lag was measured while the box still holds the old one has been lied to by arithmetic - and the only way to be sure they cannot is for there to be one place the question is answered.");
  ("A run with nothing heard at all is refused by the same line rather than by a second guard. Nothing answered is nought out of ten, which is below three quarters like any other shortfall, so the case where there is no lag at all needs no special mention here.");
  let a = multiply(measured.heard, 4);
  let b = multiply(count, 3);
  let enough = greater_than_equal(a, b);
  return enough;
}
