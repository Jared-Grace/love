import { add } from "../../../love/public/src/add.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_class_add(tile, tile_class) {
  let element = html_component_element_get(tile);
  element.classList.add(tile_class);
}
