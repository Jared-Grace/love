import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_camera_still_class } from "./app_g_bless_camera_still_class.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_class_add } from "./html_class_add.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_class_remove } from "./html_class_remove.mjs";
export function app_g_bless_camera_size_set(container_map, div_map, size) {
  arguments_assert(arguments, 3);
  ("Redraws the map at a new square size, with everybody standing on it arriving at their");
  ("new place in the same instant the ground does.");
  ("The whole of this is about a disagreement between two ways of being placed. The ground");
  ("is a grid of squares that size, so it is simply redrawn the moment the size changes.");
  ("A person is not on the grid at all - they are held at so many squares across and so far");
  ("down, and told to SLIDE whenever that lands somewhere new, because sliding is what");
  ("walking looks like. A resize moves every one of those landings at once, so every person");
  ("on the street sets off walking to a place they are already standing on, and the player");
  ("watches the ground jump and the people crawl after it.");
  ("So the sliding is switched off for the one frame in which the size changes, and back on");
  ("immediately afterwards. Off, a person is placed exactly the way the ground is - which is");
  ("the correct answer for a resize and the wrong one for a step, and this is the only place");
  ("that knows which of those is happening.");
  ("It is done with a rule in the page rather than by writing on each person, for two");
  ("reasons. Every part of every person carries its own sliding instruction written into it,");
  ("so writing over them means finding all of them and then putting each one back exactly as");
  ("it was; and it is not only people - anything drawn on this map that slides has the same");
  ("problem, including things added later that this would never have been told about. A rule");
  ("that outranks what is written on an element covers all of it and leaves nothing to put");
  ("back.");
  ("The map is made to lay itself out again while the rule is still on. That is what pins");
  ("everybody to their new places: the browser works out where everything is exactly once,");
  ("with sliding switched off, and by the time the rule comes off those places are simply");
  ("where things are. Without that the whole thing happens after this returns, by which time");
  ("the rule is gone and every person slides after all.");
  let name = app_g_bless_camera_still_class();
  let selector = text_combine_multiple([".", name, ", .", name, " *"]);
  let css = text_combine_multiple([
    selector,
    " { transition: none !important; }",
  ]);
  html_style_head(css);
  html_class_add(container_map, name);
  let variable = g_img_square_size_variable();
  html_style_variable_set(container_map, variable, size);
  html_reflow_force(div_map);
  html_class_remove(container_map, name);
}
