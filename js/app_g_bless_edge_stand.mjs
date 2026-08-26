import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { math_max } from "./math_max.mjs";
import { divide } from "./divide.mjs";
import { math_number_clamp } from "./math_number_clamp.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function app_g_bless_edge_stand(outer, box, point) {
  arguments_assert(arguments, 3);
  ("Where on the glass the edge arrow has to stand to be pointing at somebody off the screen: their own place, pulled back inside the box far enough that the whole arrow still fits.");
  ("The amount it is held back by is measured off the arrow ITSELF rather than guessed, so all of it stays on the glass at whatever size the tiles are being drawn at today. Guessed, it is right on one phone.");
  ("The longer of the arrow's two sides is what is held back by, and half of it, because the arrow is placed by its MIDDLE and it turns - so the side that was its height a moment ago is its width now, and the room kept has to be enough for either.");
  let person_x = property_get(point, "x");
  let person_y = property_get(point, "y");
  let box_left = property_get(box, "left");
  let box_top = property_get(box, "top");
  let box_right = property_get(box, "right");
  let box_bottom = property_get(box, "bottom");
  let rect_arrow = html_bounding_client_rect(outer);
  let wide = property_get(rect_arrow, "width");
  let tall = property_get(rect_arrow, "height");
  let longer = math_max(wide, tall);
  let pad = divide(longer, 2);
  let low = add(box_left, pad);
  let high = subtract(box_right, pad);
  let x = math_number_clamp(person_x, low, high);
  let low2 = add(box_top, pad);
  let high2 = subtract(box_bottom, pad);
  let y = math_number_clamp(person_y, low2, high2);
  let stand = {
    x,
    y,
  };
  return stand;
}
