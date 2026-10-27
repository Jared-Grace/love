import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_text_look_copy(from, to) {
  arguments_assert(arguments, 2);
  ("write onto to how the words in from look as drawn - their font, size, weight, colour and spacing - so a copy taken away from what it stood in still looks the same");
  ("Read off what is drawn rather than what was written onto from, because a piece of a line usually wears nothing of its own: its look comes from the line around it, and a copy hung off the page elsewhere would lose all of it.");
  let element = html_component_element_get(from);
  let look = getComputedStyle(element);
  for (let property of [
    "fontFamily",
    "fontSize",
    "fontWeight",
    "fontStyle",
    "color",
    "lineHeight",
    "letterSpacing",
    "whiteSpace",
  ]) {
    let value = property_get(look, property);
    html_style_set(to, property, value);
  }
}
