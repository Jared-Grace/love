import { app_g_bless_edge_seen_is } from "./app_g_bless_edge_seen_is.mjs";
import { app_g_bless_edge_stand } from "./app_g_bless_edge_stand.mjs";
import { app_g_bless_edge_degrees } from "./app_g_bless_edge_degrees.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_edge_box } from "./app_g_bless_edge_box.mjs";
import { app_g_bless_edge_nearest_try } from "./app_g_bless_edge_nearest_try.mjs";
import { null_is } from "./null_is.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { subtract } from "./subtract.mjs";
import { html_style_rotate_degrees_set } from "./html_style_rotate_degrees_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
export function app_g_bless_edge(edge, container_map, bar, remaining) {
  arguments_assert(arguments, 4);
  ("Aims the screen-edge arrow at the nearest person still to pray for and shows it - unless that person is already in view, or there is nobody left, in which case it is put away.");
  ("Put away the moment the person can be SEEN, because from then on the arrow over their head is the better answer to the same question and two answers at once is one too many. An edge arrow left up while its target is on the screen also reads as pointing at something else entirely, somewhere further out.");
  ("Where it stands is the target's own place on the screen, pulled back inside the box until it fits. That is not the point where a line from the middle would cross the edge, and it is deliberately not: it is far simpler, it lands on the same side and near enough the same place, and it has the property that matters - walk towards it and you close on the person.");
  let outer = property_get(edge, "outer");
  let spin = property_get(edge, "spin");
  let box = app_g_bless_edge_box(container_map, bar);
  let point = app_g_bless_edge_nearest_try(remaining, box);
  let nobody = null_is(point);
  if (nobody) {
    html_visibility_hidden(outer);
    return;
  }
  let seen = app_g_bless_edge_seen_is(box, point);
  if (seen) {
    html_visibility_hidden(outer);
    return;
  }
  let stand = app_g_bless_edge_stand(outer, box, point);
  let degrees = app_g_bless_edge_degrees(box, point);
  html_style_rotate_degrees_set(spin, degrees);
  let box_left = property_get(box, "left");
  let box_top = property_get(box, "top");
  let stand_x = property_get(stand, "x");
  let stand_y = property_get(stand, "y");
  let from_left = subtract(stand_x, box_left);
  let from_top = subtract(stand_y, box_top);
  html_style_assign(outer, {
    left: html_pixels_text(from_left),
    top: html_pixels_text(from_top),
  });
  html_visibility_visible(outer);
}
