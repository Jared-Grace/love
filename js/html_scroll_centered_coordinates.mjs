import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_scroll_centered_coordinates_element } from "./html_scroll_centered_coordinates_element.mjs";
export function html_scroll_centered_coordinates(tile_component, container) {
  arguments_assert(arguments, 2);
  ("Which square of the grid is in the middle of the scrolling box right now, counted in squares and allowed a fraction of one - asked of a wrapped box rather than of the element inside it.");
  ("The sum itself lives one name along, because a game map asks the same question holding the element already and the whole of it was written out twice to say so. All this adds is the unwrapping, which is the only thing the two askers ever disagreed about.");
  let container_e = html_component_element_get(container);
  let coordinates = html_scroll_centered_coordinates_element(
    container_e,
    tile_component,
  );
  return coordinates;
}
