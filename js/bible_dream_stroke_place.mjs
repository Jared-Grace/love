import { html_element_svg } from "./html_element_svg.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { bible_dream_stroke_samples } from "./bible_dream_stroke_samples.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
export function bible_dream_stroke_place(drawing, stroke) {
  "Draw one stroke of a dream twice over - a wide faint one showing where it goes, and a bright thin one hidden until it is traced - and hand back everything a trace of it will need.";
  "The faint one IS the corridor. It is drawn wide rather than described in words because a player has to be able to see how much room they have before they start moving, and a rule that only announces itself by being broken is not a rule anybody can play against.";
  "The bright one is drawn whole and then hidden by a dash as long as itself, so that revealing it is a matter of moving one number rather than of building a new path out of the part traced so far. What a player sees appear is exactly the shape that was always there, which is the point of the whole palette: no move adds a line the passage did not give.";
  "It is placed by moving the whole pair rather than by redrawing the shape at its position, so the pointer only ever has to be shifted by the offset to be compared against the samples.";
  let group = html_element_svg(drawing, "g");
  let moved = "translate(" + stroke.x + "," + stroke.y + ")";
  html_attribute_set(group, "transform", moved);
  let guide = html_element_svg(group, "path");
  html_attribute_set(guide, "d", stroke.d);
  html_attribute_set(guide, "fill", "none");
  let guide_color = app_shared_color_gray_dark();
  html_attribute_set(guide, "stroke", guide_color);
  html_attribute_set(guide, "stroke-width", "8");
  html_attribute_set(guide, "stroke-linecap", "round");
  html_attribute_set(guide, "stroke-linejoin", "round");
  let ink = html_element_svg(group, "path");
  html_attribute_set(ink, "d", stroke.d);
  html_attribute_set(ink, "fill", "none");
  let ink_color = app_shared_color_white();
  html_attribute_set(ink, "stroke", ink_color);
  html_attribute_set(ink, "stroke-width", "3");
  html_attribute_set(ink, "stroke-linecap", "round");
  html_attribute_set(ink, "stroke-linejoin", "round");
  let element = html_component_element_get(ink);
  let total = element.getTotalLength();
  let length_text = String(total);
  html_attribute_set(ink, "stroke-dasharray", length_text);
  html_attribute_set(ink, "stroke-dashoffset", length_text);
  let samples = bible_dream_stroke_samples(ink, 160);
  let state = {
    symbol: stroke.symbol,
    said: stroke.said,
    x: stroke.x,
    y: stroke.y,
    ink,
    total,
    samples,
    index: 0,
    slips: 0,
    off: false,
    done: false,
  };
  return state;
}
