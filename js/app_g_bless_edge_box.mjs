import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
export function app_g_bless_edge_box(container_map, bar) {
  arguments_assert(arguments, 2);
  ("The part of the screen an arrow pointing off the map is allowed to stand in: the whole map, less the strip of buttons along the bottom - with the middle of what is left worked out as well, since that is the point every direction is measured from.");
  ("The buttons are taken off because they are DRAWN OVER the map rather than beside it, so the map's own box runs on underneath them. An arrow that used the map's box would sit on top of the turn arrows a thumb is reaching for, and the one thing a player must never have to do is hunt for a button underneath a hint.");
  ("The middle is the player, near enough, because the map scrolls to keep the player in the middle of it. It stops being exactly the player at the edges of the world, where the scrolling has run out and the player walks on across a still picture - and an arrow that is a few degrees off there still points at the right side of the screen, which is all it was ever asked to do.");
  let rect = html_bounding_client_rect(container_map);
  let rect_bar = html_bounding_client_rect(bar);
  let left = property_get(rect, "left");
  let top = property_get(rect, "top");
  let right = property_get(rect, "right");
  let bottom_full = property_get(rect, "bottom");
  let height_bar = property_get(rect_bar, "height");
  let bottom = subtract(bottom_full, height_bar);
  let top2 = add(left, right);
  let x = divide(top2, 2);
  let top3 = add(top, bottom);
  let y = divide(top3, 2);
  let box = {
    left,
    top,
    right,
    bottom,
    x,
    y,
  };
  return box;
}
