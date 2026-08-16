import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_attached_is(component) {
  arguments_assert(arguments, 1);
  ("whether a piece is still on the page, or has been taken off it and is only being held on to");
  ("Worth asking after any change that redraws part of a page: a piece that was measured before it and is asked about afterwards may no longer be anywhere, and everything measured of it from then on reads as nothing at all rather than as an error.");
  let element = html_component_element_get(component);
  let attached = element.isConnected;
  return attached;
}
