import { app_g_tutorial } from "../../../love/public/src/app_g_tutorial.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
export function app_g_tutorial_study(player, div_map) {
  let text = emoji_book_open();
  const player_property = "studied";
  const tutorial_property = "tutorial_study";
  app_g_tutorial(player, player_property, div_map, tutorial_property, text);
}
