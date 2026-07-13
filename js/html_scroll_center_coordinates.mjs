import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
export function html_scroll_center_coordinates(
  coordinates,
  tile_component,
  container,
) {
  let container_e = html_component_element_get(container);
  let rect = html_bounding_client_rect(tile_component);
  let tile_size = property_get(rect, "width");
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let half_tile = divide(tile_size, 2);
  let left = subtract(
    add(multiply(x, tile_size), half_tile),
    divide(container_e.clientWidth, 2),
  );
  let top = subtract(
    add(multiply(y, tile_size), half_tile),
    divide(container_e.clientHeight, 2),
  );
  let s = {
    left,
    top,
    behavior: "smooth",
  };
  container_e.scrollTo(s);
}
