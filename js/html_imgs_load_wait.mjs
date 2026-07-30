import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_img_load_wait } from "./html_img_load_wait.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_to } from "./list_to.mjs";
export async function html_imgs_load_wait(component) {
  "resolve when EVERY image already placed under this component has finished loading (or errored, or run out of patience). the singular wait is for one picture a single next step needs; this one is for the moment a whole screen is worth showing, so a caller that holds the loading cover up until it resolves shows a finished picture rather than a frame filling in square by square. every wait is started before any is awaited, so the total is the SLOWEST picture and not the sum of them, and each carries its own short patience, so one picture that never settles delays the screen by that much and no more. it reads the pictures that are there when it is called, so call it after the screen is built and never expect it to notice one added later";
  let element = html_component_element_get(component);
  let a = element.querySelectorAll("img");
  let elements = list_to(a);
  let components = list_map(elements, html_component_wrap);
  await list_map_unordered_async(components, html_img_load_wait);
}
