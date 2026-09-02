import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
import { math_max } from "./math_max.mjs";
import { multiply } from "./multiply.mjs";
import { app_g_bless_edge_inside } from "./app_g_bless_edge_inside.mjs";
export function app_g_bless_edge_stand(outer, box, point) {
  arguments_assert(arguments, 3);
  ("Where on the glass the edge arrow has to stand to be pointing at somebody off the screen: their own place, pulled back inside the box far enough that the whole arrow still fits, and then a little further.");
  ("The amount it is held back by is measured off the arrow ITSELF rather than guessed, so all of it stays on the glass at whatever size the tiles are being drawn at today. Guessed, it is right on one phone.");
  ("The longer of the arrow's two sides is what is held back by, because the arrow is placed by its MIDDLE and it turns - so the side that was its height a moment ago is its width now, and the room kept has to be enough for either.");
  ("It is held back by MORE than the half that would just fit, and the extra is what keeps it out of the CORNERS. Held back by exactly half, an arrow aimed past a corner has its own corner laid on the corner of the screen - which is the one part of a phone the eye never rests on, is the part a rounded case or a gesture bar eats into, and is where a hint went unnoticed in play. The extra sixth costs nothing anywhere else: along an edge the arrow only moves a finger's width inwards, and it is still on the side it was on.");
  ("The extra is a fraction of the ARROW and not a number of pixels, for the same reason the half is: this is one rule about a shape's own size, and a rule written half in the shape's units and half in the screen's is two rules that come apart on a tablet.");
  let rect_arrow = html_bounding_client_rect(outer);
  let wide = property_get(rect_arrow, "width");
  let tall = property_get(rect_arrow, "height");
  let longer = math_max(wide, tall);
  let pad = multiply(longer, 0.66);
  let stand = app_g_bless_edge_inside(box, point, pad);
  return stand;
}
