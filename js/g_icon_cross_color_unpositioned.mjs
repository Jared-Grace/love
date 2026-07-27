import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { html_class_add } from "./html_class_add.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_element } from "./html_element.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_icon_cross_color_unpositioned(parent, color) {
  "a cross icon in the given COLOUR — upper-right of a tile, white glow, click-through. the shared body of the two believer crosses so they differ ONLY by colour: GREEN = believes, BLUE = believes AND baptized";
  let i = html_element(parent, "i");
  html_click_none(i);
  html_class_add(i, "ri-cross-fill");
  let square_size = text_combine_multiple([
    "calc(",
    g_img_square_size_css(),
    "*.4)",
  ]);
  let glow_size = text_combine_multiple([
    "calc(",
    g_img_square_size_css(),
    "*.05)",
  ]);
  html_style_assign(i, {
    display: "flex",
    "justify-content": "flex-end",
    "align-items": "flex-start",
    "text-shadow": text_combine_multiple([
      "0 0 ",
      glow_size,
      " white, 0 0 ",
      glow_size,
      " white, 0 0 ",
      glow_size,
      " white",
    ]),
    color,
    "text-align": "right",
    "font-size": square_size,
  });
  return i;
}
