import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { not } from "./not.mjs";
export function bible_dream_hand_mark_add(state, point, nearness, taper) {
  "Lay down one short piece of the line the hand actually took, as thick and as bright as it was close to the stroke, so that what the player did stays on the screen underneath what the passage gave.";
  "★ THE HAND'S LINE IS KEPT AND NOT CORRECTED. The bright ink is Scripture's shape and never the hand's, which is right, but on its own it means every wobble simply vanishes - the error is hidden rather than answered. Keeping the hand's own line alongside it says something better: here is what you did, and here is what arrived, and they are both on the page. The first is yours and imperfect; the second is exact and was never yours to make.";
  "Thickness and brightness both come from the one nearness, because they are saying one thing and not two. A hand on the line leaves a firm gold mark; a hand that strays leaves a thinner and fainter one, and the fading IS the record of the straying.";
  "★ BOTH START WELL ABOVE NOTHING, BECAUSE A RECORD THAT CANNOT BE SEEN IS NOT A RECORD. The floors were once low enough that a mark outside the corridor read as bare background, which quietly turned the whole claim above into an eraser wearing different words: the wandering was kept in the numbers and deleted from the picture, and only the picture is what a player has. What fades is the DIFFERENCE between a careful hand and a straying one, and a difference can be plain while both of its ends are plainly visible.";
  "It refuses to draw anything for a pointer that has barely moved. A browser reports a pointer far more often than a hand crosses a shape, so without that refusal a slow careful trace would pile up hundreds of overlapping specks in one place and read as a blot rather than as a line - and a careful hand would be punished for being careful.";
  let before = state.hand_at;
  state.hand_at = point;
  if (not(before)) {
    return;
  }
  if (equal(taper, 0)) {
    return;
  }
  let moved = bible_dream_point_gap_squared(point, before);
  if (less_than(moved, 4)) {
    state.hand_at = before;
    return;
  }
  let segment = html_element_svg(state.marks, "path");
  let drawn = "M" + before.x + "," + before.y + " L" + point.x + "," + point.y;
  html_attribute_set(segment, "d", drawn);
  html_attribute_set(segment, "fill", "none");
  let value = app_shared_color_gold_glow();
  html_attribute_set(segment, "stroke", value);
  html_attribute_set(segment, "stroke-linecap", "round");
  let value2 = String(1.2 + multiply(nearness, 2.4));
  html_attribute_set(segment, "stroke-width", value2);
  let value3 = String(0.3 + multiply(nearness, 0.6));
  html_attribute_set(segment, "opacity", value3);
}
