import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { bible_dream_hand_curve_text } from "./bible_dream_hand_curve_text.mjs";
import { bible_dream_hand_path_start } from "./bible_dream_hand_path_start.mjs";
export function bible_dream_hand_segment_draw(state, points) {
  "Draw the curve between the middle two of four remembered hand points onto the stroke of the hand's own line that is being grown, starting a new stroke first if the setting has changed since the last one.";
  "★ THE PIECE DRAWN IS THE MIDDLE ONE AND NEVER THE NEWEST ONE, WHICH IS WHY THE LINE TRAILS THE POINTER BY A STEP. A curve at a point needs the point after it as much as the point before it, so the newest place the hand has reached is the one thing that cannot be drawn to yet - it is what will bend the piece behind it. A step of trailing is a few thousandths of a second and a couple of units of screen, and the alternative is drawing every newest piece straight and then having to unpick it.";
  "The setting is taken from the far end of the piece rather than averaged across it, because a piece is short and the far end is where the hand is now. Averaging would make every change to it arrive late and blurred, and the setting is already rounded.";
  "A change of setting starts a new stroke at the point the old one ended at, so nothing is skipped and the two touch. Only there do two pieces of the hand's line ever overlap, and only there is it right that they do: the two are honestly different marks.";
  let start = points[1];
  let end = points[2];
  let strength = end.strength;
  if (not(equal(strength, state.hand_level))) {
    bible_dream_hand_path_start(state, start, strength);
  }
  let text = bible_dream_hand_curve_text(points[0], start, end, points[3]);
  state.hand_d = state.hand_d + text;
  html_attribute_set(state.hand_path, "d", state.hand_d);
}
