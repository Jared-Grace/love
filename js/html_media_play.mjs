import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_media_play(component) {
  arguments_assert(arguments, 1);
  ("$plain component");
  ("Starts a sound or video player playing from wherever it sits.");
  ("A PLAYER WITH NOTHING LOADED REFUSES, AND THE REFUSAL IS SWALLOWED. The browser answers play with a promise that rejects when there is no source or the press did not count as the person's own, and in both cases the right outcome is a player that stays still - not an error thrown into the page.");
  let element = html_component_element_get(component);
  function ignored() {}
  element.play().catch(ignored);
}
