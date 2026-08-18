import { html_style_head } from "./html_style_head.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_glow_name_apply(element, keyframe, name_animation) {
  ("put a glow keyframe in the page head and start it pulsing on one element, in one call");
  ("The two halves have to agree on a name, and the name lives in a text on each side. Done at a call site, a page could go on naming an animation the head no longer defines - which does not throw and does not warn; the element simply sits there not glowing, and the only way to find out is to look at it.");
  ("The name is handed in rather than written here, because this is what makes a second glow possible at all: the head can hold as many keyframes as it likes, and the element names the one it wants.");
  html_style_head(keyframe);
  let animation = `${name_animation} 1s infinite alternate`;
  html_style_set(element, "animation", animation);
}
