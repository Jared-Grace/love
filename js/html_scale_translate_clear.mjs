import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_scale_translate_clear(component) {
  arguments_assert(arguments, 1);
  ("Takes back a drawn-on scale and shift, so the element is drawn where the page laid it");
  ("out.");
  ("The twin of the setter, and it has to be its own call because the thing it undoes lasts");
  ("across many frames. A journey that ends by writing the real size and then leaves the");
  ("scale standing has multiplied the two together, and the map is drawn at nearly twice");
  ("the size it just carefully arrived at.");
  ("Clearing it also has to happen BEFORE anything measures the map again. What a page");
  ("hands back about where a thing is drawn counts a scale written on anything above it, so");
  ("a sum about where to stand, asked while this is still on, answers about the picture");
  ("rather than about the street.");
  ("The promise that this element was about to move is taken back with it. It is a standing");
  ("request to keep a copy of the picture ready, and a map's worth of picture kept ready");
  ("for a movement that has finished is memory held for nothing - which on a phone is the");
  ("memory the rest of the game needed.");
  html_style_set(component, "transform", "");
  html_style_set(component, "willChange", "");
  html_style_set(component, "transformOrigin", "");
}
