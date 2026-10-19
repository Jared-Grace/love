import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
export function app_shared_container_blue_inside_is(parent) {
  arguments_assert(arguments, 1);
  ("Whether the nearest colored box around this spot is a light blue card - asked so a blue card drawn there can take the next shade instead, and a card inside a card reads as inside it rather than as the same field.");
  ("It walks outward to the FIRST box with a color of its own and stops there, so only the card directly around decides. A light card inside a medium card inside a light card is light again, which is the same alternation the search results draw by hand.");
  ("A box that is not on a page, or a stand-in with no parent, ends the walk and answers no.");
  let element = html_component_element_get(parent);
  let light = app_shared_container_blue_background_color();
  while (element) {
    let style = element.style;
    let background = style ? style["background-color"] : "";
    if (background) {
      let eq = equal(background, light);
      return eq;
    }
    element = element.parentElement;
  }
  return false;
}
