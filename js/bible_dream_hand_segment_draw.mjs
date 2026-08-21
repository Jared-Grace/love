import { multiply } from "./multiply.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { bible_dream_hand_curve_text } from "./bible_dream_hand_curve_text.mjs";
export function bible_dream_hand_segment_draw(state, points) {
  "Draw the curve between the middle two of four remembered hand points, at the brightness and thickness the far end of it earned.";
  "★ THE PIECE DRAWN IS THE MIDDLE ONE AND NEVER THE NEWEST ONE, WHICH IS WHY THE LINE TRAILS THE POINTER BY A STEP. A curve at a point needs the point after it as much as the point before it, so the newest place the hand has reached is the one thing that cannot be drawn to yet - it is what will bend the piece behind it. A step of trailing is a few thousandths of a second and a couple of units of screen, and the alternative is drawing every newest piece straight and then having to unpick it.";
  "★ THE ENDS ARE CUT SQUARE, AND THAT IS WHAT STOPPED THE OVERLAPS SHOWING. They used to be rounded, so every piece reached a half-circle past its own end and every joint in the line was painted by two pieces at once; two half-clear paints make a darker one, so the line came out as a string of beads at exactly the spacing of the reports. A square end stops where the piece stops, and because each piece leaves at the angle the next one arrives at, the two meet edge to edge and cover the line between them exactly once. Nothing is lost to the squaring that the continuity does not put back.";
  "The thickness is four times the brightness because the two are the one setting seen twice.";
  "The setting is taken from the far end of the piece rather than averaged across it, because a piece is short and the far end is where the hand is now. Averaging would make every change arrive late and blurred, and it changes by a hundredth between one piece and the next as it is.";
  let start = points[1];
  let end = points[2];
  let strength = end.strength;
  let piece = html_element_svg(state.marks, "path");
  let text = bible_dream_hand_curve_text(points[0], start, end, points[3]);
  let drawn = "M" + start.x + "," + start.y + text;
  html_attribute_set(piece, "d", drawn);
  html_attribute_set(piece, "fill", "none");
  let value = app_shared_color_gold_glow();
  html_attribute_set(piece, "stroke", value);
  html_attribute_set(piece, "stroke-linecap", "butt");
  let thick = multiply(strength, 4);
  let value2 = String(thick);
  html_attribute_set(piece, "stroke-width", value2);
  let value3 = String(strength);
  html_attribute_set(piece, "opacity", value3);
}
