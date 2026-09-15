import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { sides_middle_point } from "./sides_middle_point.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_hero_fx_point(fx, component) {
  arguments_assert(arguments, 2);
  ("The middle of an element on the screen, measured from the corner of the fire sheet, so something drawn on the sheet at this point sits over it.");
  let rect = html_bounding_client_rect(component);
  let middle = sides_middle_point(rect);
  let box = html_bounding_client_rect(fx);
  let left = property_get(middle, "x");
  let right = property_get(box, "left");
  let x = subtract(left, right);
  let left2 = property_get(middle, "y");
  let right2 = property_get(box, "top");
  let y = subtract(left2, right2);
  let point = {
    x,
    y,
  };
  return point;
}
