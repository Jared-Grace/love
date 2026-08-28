import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_media_source_file_set(component, file) {
  arguments_assert(arguments, 2);
  ("$plain component");
  ("$plain file");
  ("Points a player at a file chosen off this machine, so it plays without ever being uploaded.");
  ("The address handed to the player is one the browser makes up for the file and only this page can follow. It stops meaning anything the moment the page is closed, which is exactly the lifetime wanted: a song being timed is being listened to now, and nothing about it should outlive the sitting.");
  let element = html_component_element_get(component);
  let address = URL.createObjectURL(file);
  element.src = address;
  return address;
}
