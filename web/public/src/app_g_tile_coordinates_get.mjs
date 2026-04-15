import { json_from } from "../../../love/public/src/json_from.mjs";
import { html_data_get } from "../../../love/public/src/html_data_get.mjs";
export function app_g_tile_coordinates_get(tile) {
  let json = html_data_get(tile, "coordinates");
  let clicked_coordinates = json_from(json);
  return clicked_coordinates;
}
