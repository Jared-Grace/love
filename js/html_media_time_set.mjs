import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_media_time_set(component, seconds) {
  arguments_assert(arguments, 2);
  ("$plain component");
  ("$plain seconds");
  ("Moves a player to a given number of seconds into the sound.");
  ("What this is for is going back. Timing a song by hand is mostly re-doing the two lines that were missed, and the way to re-do them is to land a moment before the first of them and listen in again rather than start the song over.");
  let element = html_component_element_get(component);
  element.currentTime = seconds;
}
