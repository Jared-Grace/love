import { add } from "./add.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_class_add(tile, tile_class) {
  let element = html_component_element_get(tile);
  element.classList.add(tile_class);
}
