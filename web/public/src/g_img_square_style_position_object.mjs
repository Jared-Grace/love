import { g_img_square_style_position_only } from "../../../love/public/src/g_img_square_style_position_only.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function g_img_square_style_position_object(c, ci) {
  let x2 = object_property_get(c, "x");
  let y2 = object_property_get(c, "y");
  g_img_square_style_position_only(ci, x2, y2);
}
