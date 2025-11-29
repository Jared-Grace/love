import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function html_data_set_json(coordinates, tile) {
  let json = json_to(coordinates);
  html_data_set(tile, json);
}
