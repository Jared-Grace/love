import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_glow_clear(element) {
  ("stop an element glowing, and take away the light it was left standing in");
  ("A glow says something is being waited on. Left running after the waiting is over, it goes on saying it about whatever the page shows next, and the one thing a learner can be sure of is that the glow means nothing.");
  ("The shadow is cleared as well as the animation, because stopping an animation leaves the element wearing whichever frame it had reached - so a glow that is merely stopped becomes a permanent halo instead of going out.");
  html_style_set(element, "animation", "none");
  html_box_shadow_set(element, "none");
}
