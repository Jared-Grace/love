import { app_shared_game_div_map_container_get } from "./app_shared_game_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_shared_game_div_map_container_element_get(div_map) {
  "the drawn element the map of tiles sits in.";
  "The map hands back its container as a component, which is a wrapper rather than the thing on the page, so anything measuring or moving the container has to open it first. Every caller that wanted the element was writing both steps.";
  let container = app_shared_game_div_map_container_get(div_map);
  let container_e = html_component_element_get(container);
  return container_e;
}
