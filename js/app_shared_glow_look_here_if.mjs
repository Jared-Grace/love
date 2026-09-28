import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_glow_look_here } from "./app_shared_glow_look_here.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_glow_look_here_if(condition, element) {
  "Lights the look-here pulse round an element while it is what the player is being asked to press next, and stops it once it is not.";
  "The light is a layer behind the element that the stylesheet fades, so switching it is a mark put on and taken off - never the shadow of the element itself, which a tile already wears for a meaning of its own.";
  "Rounded from the shared radius first, because the layer takes the corners of the element and a plain holder such as a label has none.";
  arguments_assert(arguments, 2);
  let sheet = app_shared_glow_look_here_sheet();
  html_style_head(sheet);
  let border_radius = app_shared_border_radius();
  html_border_radius(element, border_radius);
  let name_class = app_shared_glow_look_here_class();
  html_class_add(element, name_class);
  let name_on = app_shared_glow_look_here_class_on();
  if (condition) {
    html_class_add(element, name_on);
  } else {
    html_class_remove(element, name_on);
  }
}
