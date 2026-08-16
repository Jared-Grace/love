import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_transition_set(component, value) {
  arguments_assert(arguments, 2);
  ("from here on, let the named changes to this piece take a while rather than happening between two frames");
  ("Which changes, and how long each takes, is written the one way a style says it - so every kind of slowing this app does is the same sentence with different words in it, rather than a family of near-identical writings of the same line.");
  html_style_set(component, "transition", value);
}
