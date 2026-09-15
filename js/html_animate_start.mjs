import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_animate_start(component, keyframes, options) {
  arguments_assert(arguments, 3);
  ("Starts a list of keyframes playing on one element and hands back the animation without waiting for it, so several can play at once.");
  let element = html_component_element_get(component);
  let animation = element.animate(keyframes, options);
  return animation;
}
