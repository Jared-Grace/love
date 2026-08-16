import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_translation_set(component, x, y) {
  arguments_assert(arguments, 3);
  ("show a piece somewhere other than where it belongs, at once and with nothing slowed: it keeps the room it was given and only what is seen of it moves");
  ("Says nothing about how long anything takes. Placing a piece and moving it there over a while are two different things, and a move is this said twice with a while set between the two sayings.");
  let element = html_component_element_get(component);
  let translation = text_combine_multiple(["translate(", x, "px, ", y, "px)"]);
  element.style.transform = translation;
}
