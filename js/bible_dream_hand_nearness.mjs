import { fn_name } from "./fn_name.mjs";
import { divide } from "./divide.mjs";
export function bible_dream_hand_nearness(gap_squared, far) {
  "Say how strongly the hand's own mark should show at a point, from how far off the stroke that point was: one when it is exactly on the line, a half at the straying distance it is given, and dwindling from there without ever quite reaching nothing.";
  "★ IT NEVER RETURNS ZERO, AND THAT IS THE WHOLE CLAIM IT MAKES. A rule that erased the mark the moment it left the corridor would be saying the wandering did not happen. It did happen, and the player did it, and something that keeps a record of it is telling the truth where an eraser would not. What the fading says instead is that the further a hand went from what it was given, the less of it there is to see - which is a different sentence, and the true one.";
  "Something does erase, much further out, and it is not this and does not contradict it. A hand fifty units off a shape has stopped tracing it and started travelling, and declining to draw travel is not the same as denying wandering; the count of slips holds the wandering either way. Nothing here knows about that, on purpose - this answers how faint, and how faint is not the same question as whether at all.";
  "It is a ratio of the two rather than a subtraction, so it needs no clamping and cannot go negative however far the hand wanders.";
  "★ THE DISTANCE IT IS MEASURED AGAINST IS HANDED IN AND IS NOT THE CORRIDOR. It used to be the corridor, and the corridor is five units to a side, so the whole visible change was spent before a hand had wandered as far as a fingertip is wide and everything beyond it sat on the floor looking identical. What decides how faint a mark is has to be spread over the distances a hand really strays, which is a different number and a much larger one.";
  ("★ IT FADES BY DISTANCE AND NOT BY AREA, WHICH IS WHY THE ROOT IS TAKEN HERE AND NOT LEFT TO THE CALLER. The gap arrives squared from ",
    fn_name("bible_dream_point_gap_squared"),
    ", and it once went straight into the ratio in that form. A squared quantity grows with the square of the straying, so a hand four units off the line came out four times fainter than a hand two units off rather than twice as faint, and everything beyond the corridor collapsed to almost nothing at once. What a person sees is a distance, so the number that decides what they see has to be one.");
  let gap = Math.sqrt(gap_squared);
  let divided = divide(far, far + gap);
  return divided;
}
