import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_remove_first } from "./list_remove_first.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { bible_dream_hand_mark_strength } from "./bible_dream_hand_mark_strength.mjs";
import { bible_dream_hand_segment_draw } from "./bible_dream_hand_segment_draw.mjs";
import { bible_dream_stroke_hand_lift } from "./bible_dream_stroke_hand_lift.mjs";
export function bible_dream_hand_mark_add(state, point, nearness, taper) {
  "Take one more place the hand has reached, keep it with the few before it, and once there are enough of them draw the curve through the ones that now have a neighbour on either side.";
  "★ THE HAND'S LINE IS KEPT AND NOT CORRECTED. The bright ink is Scripture's shape and never the hand's, which is right, but on its own it means every wobble simply vanishes - the error is hidden rather than answered. Keeping the hand's own line alongside it says something better: here is what you did, and here is what arrived, and they are both on the page. The first is yours and imperfect; the second is exact and was never yours to make.";
  "★ BOTH THICKNESS AND BRIGHTNESS START WELL ABOVE NOTHING, BECAUSE A RECORD THAT CANNOT BE SEEN IS NOT A RECORD. The floors were once low enough that a mark outside the corridor read as bare background, which quietly turned the claim above into an eraser wearing different words: the wandering was kept in the numbers and deleted from the picture, and only the picture is what a player has. What fades is the DIFFERENCE between a careful hand and a straying one, and a difference can be plain while both of its ends are plainly visible.";
  "★ THE TAPER IS ALLOWED TO TAKE THOSE FLOORS AWAY AGAIN, AND ONLY IT IS. The floors hold everywhere a mark is still the record of tracing this shape. Far enough out it is not that any more - it is a hand crossing the picture on its way elsewhere - and a floor there only guarantees that travel is drawn as firmly as drawing is.";
  "A spent taper lifts the hand rather than skipping a point. Skipping would leave the places on either side of the journey sitting next to each other in the same remembered run, and a curve would then be drawn straight across the picture between them - the very streak that not drawing travel exists to prevent. Lifting ends the line where the hand left and begins a new one where it comes back.";
  "★ THE FIRST POINT IS KEPT TWICE, WHICH IS WHAT LETS A SWEEP START AT ITS BEGINNING. A curve through a point is bent by the point before it, and the first place a hand is put down has nothing before it; standing it in for its own predecessor makes it arrive straight, which is what a hand that has just started did. Without that the first piece of every sweep could never be drawn and each press would begin a step late.";
  "It refuses to keep a point the hand has barely moved to. A browser reports a pointer far more often than a hand crosses a shape, so without that refusal a slow careful trace would pile up hundreds of places within a few units of each other, and curves fitted through them would answer to the jitter of the reporting rather than to the movement of the hand.";
  if (equal(taper, 0)) {
    bible_dream_stroke_hand_lift(state);
    return;
  }
  let points = state.hand_points;
  let strength = bible_dream_hand_mark_strength(nearness, taper);
  let marked = { x: point.x, y: point.y, strength };
  if (list_empty_is(points)) {
    list_add(points, marked);
    list_add(points, marked);
    return;
  }
  let before = list_last(points);
  let moved = bible_dream_point_gap_squared(point, before);
  if (less_than(moved, 4)) {
    return;
  }
  list_add(points, marked);
  if (less_than(list_size(points), 4)) {
    return;
  }
  bible_dream_hand_segment_draw(state, points);
  list_remove_first(points);
}
