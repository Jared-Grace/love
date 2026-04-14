import { html_class_add } from "../../../love/public/src/html_class_add.mjs";
import { app_g_class_tile } from "../../../love/public/src/app_g_class_tile.mjs";
export function app_g_class_tile_add(tile) {
  const tile_class = app_g_class_tile();
  html_class_add(tile, tile_class);
}
