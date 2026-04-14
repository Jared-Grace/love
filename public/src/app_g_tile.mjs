import { app_g_class_tile_add } from "../../../love/public/src/app_g_class_tile_add.mjs";
import { html_data_set_json } from "../../../love/public/src/html_data_set_json.mjs";
import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
export function app_g_tile(parent, r, x, y) {
  const tiles_path = g_folder_tiles();
  const src = tiles_path + r + ".png";
  let tile = html_img(parent, src);
  g_img_square_style(tile);
  app_g_class_tile_add(tile);
  const coordinates_tile = {
    x,
    y,
  };
  html_data_set_json(tile, "coordinates", coordinates_tile);
}
