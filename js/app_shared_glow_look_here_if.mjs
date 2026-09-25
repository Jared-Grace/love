import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_glow_look_here } from "./app_shared_glow_look_here.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_glow_look_here_if(condition, element) {
  "Lights the look-here pulse round an element while it is what the player is being asked to press next, and stops it once it is not.";
  "Stopped by taking the animation away and nothing else, unlike a glow being cleared for good. A tile can wear a steady shadow of its own, set before this is asked, and that shadow is what it goes back to showing once the pulse stops - clearing the shadow as well would take the tile's own light with it.";
  arguments_assert(arguments, 2);
  if (condition) {
    app_shared_glow_look_here(element);
  } else {
    html_style_set(element, "animation", "none");
  }
}
