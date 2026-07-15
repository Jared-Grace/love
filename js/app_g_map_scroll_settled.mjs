import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_scroll_settled } from "./html_scroll_settled.mjs";
export async function app_g_map_scroll_settled(div_map) {
  let container = app_g_div_map_container_get(div_map);
  let element = html_component_element_get(container);
  await html_scroll_settled(element);
}
