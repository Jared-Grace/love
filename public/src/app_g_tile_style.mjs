import { app_g_class_tile_add } from "../../../love/public/src/app_g_class_tile_add.mjs";
import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
export function app_g_tile_style(tile) {
  g_img_square_style(tile);
  app_g_class_tile_add(tile);
}
