import { bible_dream_stroke_line_paint } from "./bible_dream_stroke_line_paint.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { bible_dream_corridor_width } from "./bible_dream_corridor_width.mjs";
export function bible_dream_stroke_place_marks(group, moved, stroke) {
  arguments_assert(arguments, 3);
  html_attribute_set(group, "transform", moved);
  let guide = html_element_svg(group, "path");
  html_attribute_set(guide, "d", stroke.d);
  html_attribute_set(guide, "fill", "none");
  let guide_color = app_shared_color_gray_dark();
  let guide_width = bible_dream_corridor_width();
  bible_dream_stroke_line_paint(guide, guide_color, guide_width);
  let marks = html_element_svg(group, "g");
  let r = {
    guide,
    marks,
  };
  return r;
}
