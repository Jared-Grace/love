import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_media_time(component) {
  arguments_assert(arguments, 1);
  ("$plain component");
  ("How far into the sound a player has reached, in seconds.");
  ("This is the one reading the whole of timing a song rests on: a person taps when they hear a line begin, and what is written down is whatever this says at that moment.");
  let element = html_component_element_get(component);
  let seconds = element.currentTime;
  return seconds;
}
