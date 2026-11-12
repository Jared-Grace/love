import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_font_color_set_inside(component, color) {
  "the letters of a component and of everything inside it drawn in one colour - for a look laid over a block whose pieces each carry a colour of their own, as dark code does, word by word, so setting the block's colour alone changes nothing that shows";
  let element = html_component_element_get(component);
  let elements = [element, ...element.querySelectorAll("*")];
  for (let e of elements) {
    e.style.color = color;
  }
}
