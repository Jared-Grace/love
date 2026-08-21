import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { bible_dream_hand_segment_draw } from "./bible_dream_hand_segment_draw.mjs";
export function bible_dream_stroke_hand_lift(state) {
  "Take the hand off a stroke: draw the last piece that was still waiting for a point after it, and forget everything a continuing line was remembering.";
  "★ THE WAITING PIECE IS DRAWN RATHER THAN DROPPED, AND THE LAST POINT STANDS IN FOR THE ONE THAT NEVER CAME. Every piece of the hand's line waits for the point after it before it can be bent, so at the moment a hand is lifted there is always exactly one piece that has been travelled and not yet drawn. Dropping it would mean every sweep a player makes ends a step short of where they stopped, which reads as the line failing to keep up rather than as the hand having stopped. Repeating the final point gives that piece a neighbour whose slope is its own, so it arrives straight, which is exactly what a hand that has come to a stop did.";
  "Forgetting the points is what stops the next press from being joined to this one. Two presses in different corners of a picture are two lines and not one, and a curve drawn between them would be a stroke the passage never gave.";
  "Forgetting the stroke being grown matters as much as forgetting the points. A path that stayed remembered would go on being extended after the pen came back down somewhere else, and every earlier setting would be rewritten to the new one, because a stroke carries one brightness for the whole of itself.";
  let points = state.hand_points;
  let left = list_size(points);
  if (equal(left, 3)) {
    let last = list_last(points);
    list_add(points, last);
    bible_dream_hand_segment_draw(state, points);
  }
  state.hand_points = [];
  state.hand_path = null;
  state.hand_level = null;
  state.hand_d = "";
}
