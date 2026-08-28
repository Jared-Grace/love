import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_camera_still_class } from "./app_g_bless_camera_still_class.mjs";
import { html_class_remove } from "./html_class_remove.mjs";
export function app_g_bless_camera_still_end(container_map) {
  arguments_assert(arguments, 1);
  ("Gives the map back its sliding, after it was switched off so that a change of size");
  ("could be placed exactly.");
  ("Whoever switched it off switches it back on. Sliding is how walking is drawn, so a map");
  ("left without it is a street where everybody teleports - which is why this is never");
  ("optional and never somebody else's job.");
  let name = app_g_bless_camera_still_class();
  html_class_remove(container_map, name);
}
