import { app_g_path_prefix } from "../../../love/public/src/app_g_path_prefix.mjs";
import { html_data_set_json } from "../../../love/public/src/html_data_set_json.mjs";
import { html_class_add } from "../../../love/public/src/html_class_add.mjs";
import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
import { app_g_class_tile } from "../../../love/public/src/app_g_class_tile.mjs";
import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
export function app_g_tile(parent, r, x, y) {
  let path_prefix = app_g_path_prefix();
  const tiles_path = g_folder_tiles(path_prefix);
  const tile_class = app_g_class_tile();
  const src = tiles_path + r + ".png";
  let tile = html_img(parent, src);
  g_img_square_style(tile);
  html_class_add(tile, tile_class);
  const coordinates_tile = {
    x,
    y,
  };
  html_data_set_json(tile, "coordinates", coordinates_tile);
}
