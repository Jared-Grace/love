import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_style_clear(component) {
  arguments_assert(arguments, 1);
  ("take off everything that was ever styled onto a piece by hand, leaving it looking however the page around it says it should look");
  ("All of it at once rather than one thing at a time, so it cannot fall behind what put it there: a piece given a colour, a shape and some room to stand in needs three undoings written out, and the day a fourth is given the undoing quietly leaves it on.");
  let element = html_component_element_get(component);
  element.style.cssText = "";
}
