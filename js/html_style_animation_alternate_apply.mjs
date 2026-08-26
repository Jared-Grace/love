import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_animation_alternate_apply(
  element,
  keyframe,
  name_animation,
) {
  arguments_assert(arguments, 3);
  ("Put a keyframe in the page head and start one element running it, back and forth, for as long as the page is open - in one call.");
  ("The head and the element have to agree on a NAME, and the name lives in a text on each side of that agreement. Written at a call site, a page can go on naming an animation the head no longer defines, and nothing anywhere throws: the element simply sits still, and looking at it is the only way to find out.");
  ("Back and forth rather than round and round, because everything asking for this is a thing breathing in place - a glow swelling, an arrow nodding - and a movement that snaps back to its start once a second reads as a fault rather than as breathing.");
  ("The name is handed in rather than written here, which is what lets the head hold as many of these as the page wants while each element names the one it means.");
  html_style_head(keyframe);
  let animation = text_combine(name_animation, " 1s infinite alternate");
  html_style_set(element, "animation", animation);
}
