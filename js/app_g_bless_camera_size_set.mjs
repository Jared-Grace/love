import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_camera_still_start } from "./app_g_bless_camera_still_start.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { app_g_bless_camera_still_end } from "./app_g_bless_camera_still_end.mjs";
export function app_g_bless_camera_size_set(container_map, div_map, size) {
  arguments_assert(arguments, 3);
  ("Redraws the map at a new square size in one step, with everybody standing on it");
  ("arriving at their new place in the same instant the ground does.");
  ("Why the sliding has to be off for that instant, and why it is done with a rule in the");
  ("page, is said where it is switched off.");
  ("The map is made to lay itself out again while the rule is still on. That is what pins");
  ("everybody to their new places: the browser works out where everything is exactly once,");
  ("with sliding switched off, and by the time the rule comes off those places are simply");
  ("where things are. Without that the whole thing happens after this returns, by which");
  ("time the rule is gone and every person slides after all.");
  ("This is the instant version. A camera that travels between two sizes holds the same");
  ("rule on across every frame of the journey instead, so it does not go through here.");
  app_g_bless_camera_still_start(container_map);
  let variable = g_img_square_size_variable();
  html_style_variable_set(container_map, variable, size);
  html_reflow_force(div_map);
  app_g_bless_camera_still_end(container_map);
}
