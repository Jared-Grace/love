import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_media_duration(component) {
  arguments_assert(arguments, 1);
  ("$plain component");
  ("How long the whole sound runs, in seconds.");
  ("It is not known the moment a file is chosen. The browser has to read the head of the file first, so this answers a not-a-number until it has, and anything asking has to wait for the player to say it is ready rather than ask straight away.");
  let element = html_component_element_get(component);
  let seconds = element.duration;
  return seconds;
}
