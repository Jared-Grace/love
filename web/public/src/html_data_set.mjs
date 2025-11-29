import { marker } from "../../../love/public/src/marker.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_data_set(tile, tile_class) {
  marker("1");
  let element = html_component_element_get(tile);
  element.classList.add(tile_class);
}
