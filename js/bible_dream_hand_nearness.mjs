import { fn_name } from "./fn_name.mjs";
import { divide } from "./divide.mjs";
export function bible_dream_hand_nearness(gap_squared, tolerance_squared) {
  "Say how strongly the hand's own mark should show at a point, from how far off the stroke that point was: one when it is exactly on the line, a half at the edge of the corridor, and dwindling from there without ever quite reaching nothing.";
  "★ IT NEVER RETURNS ZERO, AND THAT IS THE WHOLE CLAIM IT MAKES. A rule that erased the mark the moment it left the corridor would be saying the wandering did not happen. It did happen, and the player did it, and something that keeps a record of it is telling the truth where an eraser would not. What the fading says instead is that the further a hand went from what it was given, the less of it there is to see - which is a different sentence, and the true one.";
  "It is a ratio of the two rather than a subtraction, so it needs no clamping and cannot go negative however far the hand wanders.";
  ("★ IT FADES BY DISTANCE AND NOT BY AREA, WHICH IS WHY THE ROOTS ARE TAKEN HERE AND NOT LEFT TO THE CALLER. The gap arrives squared from ",
    fn_name("bible_dream_point_gap_squared"),
    ", and it once went straight into the ratio in that form. A squared quantity grows with the square of the straying, so a hand four units off the line came out four times fainter than a hand two units off rather than twice as faint, and everything beyond the corridor collapsed to almost nothing at once. What a person sees is a distance, so the number that decides what they see has to be one.");
  let gap = Math.sqrt(gap_squared);
  let tolerance = Math.sqrt(tolerance_squared);
  let divided = divide(tolerance, tolerance + gap);
  return divided;
}
