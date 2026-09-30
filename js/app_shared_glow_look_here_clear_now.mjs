import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { app_shared_glow_look_here_class } from "./app_shared_glow_look_here_class.mjs";
import { app_shared_glow_look_here_class_on } from "./app_shared_glow_look_here_class_on.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
export function app_shared_glow_look_here_clear_now(component) {
  "Puts out every look-here pulse inside a part of the page at once, with no fade.";
  "For the moment a goal is reached: nothing is left to press, so a light still pulsing - or fading slowly out - over the win reads as if something were still being asked for.";
  "Taking off the mark that the light layer hangs from removes the layer itself, so there is nothing left for the stylesheet to fade; a later pass that lights nothing puts the mark back with the layer dark.";
  arguments_assert(arguments, 1);
  let root = html_component_element_get(component);
  let name_class = app_shared_glow_look_here_class();
  let name_on = app_shared_glow_look_here_class_on();
  let selector = text_combine(".", name_class);
  let v = root.querySelectorAll(selector);
  let found = Array.from(v);
  function lambda(element) {
    element.classList.remove(name_class, name_on);
  }
  each(found, lambda);
}
