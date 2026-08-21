import { app_shared_game_class_tile_add } from "./app_shared_game_class_tile_add.mjs";
import { g_img_square_style } from "./g_img_square_style.mjs";
export function app_shared_game_tile_style(tile) {
  g_img_square_style(tile);
  app_shared_game_class_tile_add(tile);
}
