import { multiply_divide } from "./multiply_divide.mjs";
import { bible_dream_hand_ribbon_text } from "./bible_dream_hand_ribbon_text.mjs";
import { bible_dream_hand_mark_thickness } from "./bible_dream_hand_mark_thickness.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
export function bible_dream_hand_segment_draw(state, points) {
  "Draw the curve between the middle two of four remembered hand points, fading along its own length from the brightness the near end earned to the brightness the far end earned.";
  "★ THE PIECE DRAWN IS THE MIDDLE ONE AND NEVER THE NEWEST ONE, WHICH IS WHY THE LINE TRAILS THE POINTER BY A STEP. A curve at a point needs the point after it as much as the point before it, so the newest place the hand has reached is the one thing that cannot be drawn to yet - it is what will bend the piece behind it. A step of trailing is a few thousandths of a second and a couple of units of screen, and the alternative is drawing every newest piece straight and then having to unpick it.";
  "★ THE ENDS ARE CUT SQUARE, AND THAT IS WHAT STOPPED THE OVERLAPS SHOWING. They used to be rounded, so every piece reached a half-circle past its own end and every joint in the line was painted by two pieces at once; two half-clear paints make a darker one, so the line came out as a string of beads at exactly the spacing of the reports. A square end stops where the piece stops, and because each piece leaves at the angle the next one arrives at, the two meet edge to edge and cover the line between them exactly once. Nothing is lost to the squaring that the continuity does not put back.";
  "★ THE PIECE IS FILLED AND NOT STROKED, WHICH IS WHAT LET THE WIDTH CHANGE SMOOTHLY. A stroked path is drawn at one width for the whole of what it draws, so the widths of a run of pieces are a run of separate numbers, and the line stepped from one to the next at every joint - the same stair the colour used to have, in the other of the two things this one setting decides. Drawn as its own outline the width is never stated: it is the distance between the two edges, and that distance changes along the piece as freely as the colour does. The brightness and the thickness were always one number and now they are drawn one way.";
  "★ THE BRIGHTNESS IS A FADING ALONG THE PIECE AND NOT ONE NUMBER FOR THE WHOLE OF IT, WHICH IS WHAT MAKES THE COLOUR CONTINUOUS RATHER THAN MERELY FINE. A flat piece has to pick one of its two ends, so the line changed in a step at every joint - small, a hundredth of the brightness and a few thousandths of a second apart, but a step, and a run of them is a stair however shallow each one is. Running the fading from the near end's brightness to the far end's means every piece begins at exactly the brightness its neighbour ended on, so the whole sweep is one unbroken change with no value repeated and none jumped over. The squared ends are what allow it: a rounded end would paint its neighbour's beginning over again at a brightness that beginning had already left behind.";
  "The fading is written along the straight line between the two ends rather than along the curve, because that is the only path a drawing surface can be told to fade over. A piece spans a couple of units and bows by a fraction of one, so the two differ by less than the thickness of the line they describe.";
  "★ IT IS NAMED FROM WHAT IS ALREADY ON THE SURFACE AND FROM NOTHING KEPT BETWEEN CALLS. A fading has to be referred to by name, every name has to be its own, and a running total would be one more thing to keep correct across a lift, a break and a finished stroke. The stroke's place in the drawing never changes and the count of what is already in its layer only ever grows, so the two together name a piece uniquely without anything being remembered on purpose.";
  "The thickness is a fixed multiple of the brightness because the two are the one setting seen twice, and each end is asked for its own. Half of it is what the outline wants, because a width spans both sides of the line and an edge is measured from the line outwards.";
  let start = points[1];
  let end = points[2];
  let marks = state.marks;
  let layer = html_component_element_get(marks);
  let laid = layer.children.length;
  let name = "hand_" + state.rank + "_" + laid;
  let color = app_shared_color_gold_glow();
  let fade = html_element_svg(marks, "linearGradient");
  html_attribute_set(fade, "id", name);
  html_attribute_set(fade, "gradientUnits", "userSpaceOnUse");
  let value = String(start.x);
  html_attribute_set(fade, "x1", value);
  let value3 = String(start.y);
  html_attribute_set(fade, "y1", value3);
  let value4 = String(end.x);
  html_attribute_set(fade, "x2", value4);
  let value5 = String(end.y);
  html_attribute_set(fade, "y2", value5);
  let opening = html_element_svg(fade, "stop");
  html_attribute_set(opening, "offset", "0");
  html_attribute_set(opening, "stop-color", color);
  let value6 = String(start.strength);
  html_attribute_set(opening, "stop-opacity", value6);
  let closing = html_element_svg(fade, "stop");
  html_attribute_set(closing, "offset", "1");
  html_attribute_set(closing, "stop-color", color);
  let value7 = String(end.strength);
  html_attribute_set(closing, "stop-opacity", value7);
  let piece = html_element_svg(marks, "path");
  let times = bible_dream_hand_mark_thickness();
  let half_start = multiply_divide(start.strength, times, 2);
  let half_end = multiply_divide(end.strength, times, 2);
  let drawn = bible_dream_hand_ribbon_text(
    points[0],
    start,
    end,
    points[3],
    half_start,
    half_end,
  );
  html_attribute_set(piece, "d", drawn);
  let paint = "url(#" + name + ")";
  html_attribute_set(piece, "fill", paint);
  html_attribute_set(piece, "stroke", "none");
}
