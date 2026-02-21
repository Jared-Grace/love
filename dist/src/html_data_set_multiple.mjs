import { each_object } from "../../../love/public/src/each_object.mjs";
import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
export function html_data_set_multiple(tile, coordinates) {
  function lambda3(value, property) {
    html_data_set(tile, property, value);
  }
  each_object(coordinates, lambda3);
}
