import { html_class_add } from "./html_class_add.mjs";
import { app_g_class_tile } from "./app_g_class_tile.mjs";
export function app_g_class_tile_add(tile) {
  let tile_class = app_g_class_tile();
  html_class_add(tile, tile_class);
}
