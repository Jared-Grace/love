import { each_object } from "./each_object.mjs";
import { html_data_set } from "./html_data_set.mjs";
export function html_data_set_multiple(tile, coordinates) {
  function lambda(value, property) {
    html_data_set(tile, property, value);
  }
  each_object(coordinates, lambda);
}
