import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_edge_box } from "./bless_edge_box.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { sides_middle_point } from "./sides_middle_point.mjs";
import { bless_edge_seen_is } from "./bless_edge_seen_is.mjs";
export function app_g_hero_seen_is(hero, component) {
  arguments_assert(arguments, 2);
  ("Whether the middle of an element is on the part of the screen the player can look at - the same test the edge arrow hides itself by, so the dark power is thrown exactly when the arrow is gone.");
  let container_map = property_get(hero, "container_map");
  let bar = property_get(hero, "bar");
  let box = bless_edge_box(container_map, bar);
  let rect = html_bounding_client_rect(component);
  let point = sides_middle_point(rect);
  let seen = bless_edge_seen_is(box, point);
  return seen;
}
