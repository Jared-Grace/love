import { g_tile_path } from "../../../love/public/src/g_tile_path.mjs";
import { app_g_tile_style } from "../../../love/public/src/app_g_tile_style.mjs";
import { html_data_set_json } from "../../../love/public/src/html_data_set_json.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
export function app_g_tile(parent, tile_name, x, y) {
  const src = g_tile_path(tile_name);
  let tile = html_img(parent, src);
  app_g_tile_style(tile);
  const coordinates_tile = {
    x,
    y,
  };
  html_data_set_json(tile, "coordinates", coordinates_tile);
}
