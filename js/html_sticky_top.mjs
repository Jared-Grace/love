import { arguments_assert } from "./arguments_assert.mjs";
import { html_sticky_generic } from "./html_sticky_generic.mjs";
export function html_sticky_top(element) {
  "Keeps one thing in sight against the top of the screen while the page scrolls past it.";
  arguments_assert(arguments, 1);
  html_sticky_generic(element, "top");
}
