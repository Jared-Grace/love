import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_style_background_color_get(component) {
  "the background colour written directly onto one piece, exactly as it was written there - and an empty word when nothing was ever written onto it";
  "What is read back is the piece's own writing, never what a stylesheet standing behind it would have painted. That is the point: it answers who painted this deliberately, which is the only question worth asking before repainting it.";
  arguments_assert(arguments, 1);
  let element = html_component_element_get(component);
  let color = element.style.backgroundColor;
  return color;
}
