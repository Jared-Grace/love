import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_edge_box } from "./app_g_bless_edge_box.mjs";
import { app_g_bless_edge_nearest_try } from "./app_g_bless_edge_nearest_try.mjs";
import { null_is } from "./null_is.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { math_number_clamp } from "./math_number_clamp.mjs";
import { equal } from "./equal.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { divide } from "./divide.mjs";
import { math_max } from "./math_max.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { math_atan2_degrees } from "./math_atan2_degrees.mjs";
import { html_style_rotate_degrees_set } from "./html_style_rotate_degrees_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
export function app_g_bless_edge(edge, container_map, bar, remaining) {
  arguments_assert(arguments, 4);
  ("Aims the screen-edge arrow at the nearest person still to pray for and shows it - unless that person is already in view, or there is nobody left, in which case it is put away.");
  ("Put away the moment the person can be SEEN, because from then on the arrow over their head is the better answer to the same question and two answers at once is one too many. An edge arrow left up while its target is on the screen also reads as pointing at something else entirely, somewhere further out.");
  ("Where it stands is the target's own place on the screen, pulled back inside the box until it fits. That is not the point where a line from the middle would cross the edge, and it is deliberately not: it is far simpler, it lands on the same side and near enough the same place, and it has the property that matters - walk towards it and you close on the person.");
  ("The amount it is held back by is measured off the arrow ITSELF rather than guessed, so the whole of it stays on the glass at whatever size the tiles are being drawn at today. Guessed, it is right on one phone.");
  ("The turn is measured from the middle of what the player is looking at to the person, which is the same as from the player to the person except at the edges of the world. Measured from where the arrow is standing instead, the arrow would point along the edge it is sitting on and say nothing.");
  let outer = property_get(edge, "outer");
  let spin = property_get(edge, "spin");
  let box = app_g_bless_edge_box(container_map, bar);
  let point = app_g_bless_edge_nearest_try(remaining, box);
  let nobody = null_is(point);
  if (nobody) {
    html_visibility_hidden(outer);
    return;
  }
  let person_x = property_get(point, "x");
  let person_y = property_get(point, "y");
  let box_left = property_get(box, "left");
  let box_top = property_get(box, "top");
  let box_right = property_get(box, "right");
  let box_bottom = property_get(box, "bottom");
  let seen_x = math_number_clamp(person_x, box_left, box_right);
  let seen_y = math_number_clamp(person_y, box_top, box_bottom);
  let across_is = equal(seen_x, person_x);
  let along_is = equal(seen_y, person_y);
  if (across_is) {
    if (along_is) {
      html_visibility_hidden(outer);
      return;
    }
  }
  let rect_arrow = html_bounding_client_rect(outer);
  let wide = property_get(rect_arrow, "width");
  let tall = property_get(rect_arrow, "height");
  let top2 = math_max(wide, tall);
  let pad = divide(top2, 2);
  let low = add(box_left, pad);
  let high = subtract(box_right, pad);
  let stand_x = math_number_clamp(person_x, low, high);
  let low2 = add(box_top, pad);
  let high2 = subtract(box_bottom, pad);
  let stand_y = math_number_clamp(person_y, low2, high2);
  let right = property_get(box, "y");
  let down = subtract(person_y, right);
  let right2 = property_get(box, "x");
  let right_of = subtract(person_x, right2);
  let degrees = math_atan2_degrees(down, right_of);
  html_style_rotate_degrees_set(spin, degrees);
  let value = subtract(stand_x, box_left);
  let value2 = subtract(stand_y, box_top);
  html_style_assign(outer, {
    left: html_pixels_text(value),
    top: html_pixels_text(value2),
  });
  html_visibility_visible(outer);
}
