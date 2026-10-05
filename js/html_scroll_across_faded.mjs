import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_on_scroll } from "./html_on_scroll.mjs";
import { html_on_size_change } from "./html_on_size_change.mjs";
export function html_scroll_across_faded(parent) {
  "a box whose content scrolls sideways when it is wider than the box, its cut-off edge fading out so a reader can see more is there; hands back the box to draw into";
  "Asked by the human 2026-10-05, after a student who reads with this app's larger text found a grid picture wider than the screen: every size in those pictures is counted in em, so a larger text widens the picture past the screen and its right side was cut off with nothing to say so.";
  "The fade is drawn by a mask on the box itself, so it needs no knowledge of what colour lies behind, and it changes no size: a reader who never zooms sees exactly what they saw before, and a fade appearing or going moves nothing. Each edge fades only while there is more to scroll to beyond it, so once the reader reaches the end, the end reads whole.";
  "Not picked: a written hint such as scroll sideways under the picture, which would have to keep its line on every picture, overflowing or not, since a line that appears pushes everything below it down; and arrows drawn over the picture, which cover the very numbers on its edges that the lessons ask about.";
  arguments_assert(arguments, 1);
  let box = html_div(parent);
  html_style_assign(box, {
    "overflow-x": "auto",
    "overflow-y": "hidden",
  });
  let fade = "2em";
  function update() {
    let element = html_component_element_get(box);
    let left = element.scrollLeft;
    let more_left = less_than(0, left);
    let seen = add(left, element.clientWidth);
    let b = subtract(element.scrollWidth, 1);
    let more_right = less_than(seen, b);
    let mask = "none";
    if (more_left || more_right) {
      let left_end = more_left ? "transparent" : "black";
      let right_end = more_right ? "transparent" : "black";
      mask = text_combine_multiple([
        "linear-gradient(to right, ",
        left_end,
        ", black ",
        fade,
        ", black calc(100% - ",
        fade,
        "), ",
        right_end,
        ")",
      ]);
    }
    html_style_assign(box, {
      "mask-image": mask,
      "-webkit-mask-image": mask,
    });
  }
  html_on_scroll(box, update);
  ("Its size and not the window's, because the app's own larger text changes no window at all: it grows the picture, and so the box's height, which is what is reported.");
  html_on_size_change(box, update);
  return box;
}
