import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
import { html_class_add } from "../../../love/public/src/html_class_add.mjs";
import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function g_icon_cross(div_map, coordinates) {
  let i = html_element(div_map, "i");
  html_click_none(i);
  html_class_add(i, "ri-cross-fill");
  const square_size = `calc(` + g_img_square_size_css() + `*.4)`;
  const glow_size = `calc(` + g_img_square_size_css() + `*.05)`;
  html_style_assign(i, {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    textShadow:
      "0 0 " +
      glow_size +
      " white, 0 0 " +
      glow_size +
      " white, 0 0 " +
      glow_size +
      " white",
    color: "#1fd000ff",
    textAlign: "right",
    fontSize: square_size,
  });
  g_img_square_style_position(i, coordinates, "icon");
}
