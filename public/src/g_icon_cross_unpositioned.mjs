import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
import { html_class_add } from "../../../love/public/src/html_class_add.mjs";
import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function g_icon_cross_unpositioned(parent) {
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
    justifyContent: "flex-end",
    alignItems: "flex-start",
    textShadow: text_combine_multiple([
      "0 0 ",
      glow_size,
      " white, 0 0 ",
      glow_size,
      " white, 0 0 ",
      glow_size,
      " white",
    ]),
    color: "#1fd000ff",
    textAlign: "right",
    fontSize: square_size,
  });
  return i;
}
