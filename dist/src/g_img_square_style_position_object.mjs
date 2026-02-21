import { g_img_square_style_position_only } from "../../../love/public/src/g_img_square_style_position_only.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function g_img_square_style_position_object(c, ci) {
  let x2 = property_get(c, "x");
  let y2 = property_get(c, "y");
  g_img_square_style_position_only(ci, x2, y2);
}
