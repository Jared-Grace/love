import { html_style_animation_alternate_apply } from "./html_style_animation_alternate_apply.mjs";
export function app_shared_glow_name_apply(element, keyframe, name_animation) {
  "put a glow keyframe in the page head and start it pulsing on one element, in one call";
  "The two halves have to agree on a name, and the name lives in a text on each side. Done at a call site, a page could go on naming an animation the head no longer defines - which does not throw and does not warn; the element simply sits there not glowing, and the only way to find out is to look at it.";
  "The name is handed in rather than written here, because this is what makes a second glow possible at all: the head can hold as many keyframes as it likes, and the element names the one it wants.";
  "The doing of it is not a glow's business and is not written here any more. Installing a keyframe and pointing an element at it by name is the same movement whatever the movement means, and a second thing wanting it - an arrow nodding over somebody to pray for - would otherwise have made a second copy of the same three lines, free to drift into breathing at a different speed.";
  html_style_animation_alternate_apply(element, keyframe, name_animation);
}
