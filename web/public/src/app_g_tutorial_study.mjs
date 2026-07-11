import { app_g_tutorial } from "../../../love/public/src/app_g_tutorial.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
export async function app_g_tutorial_study(div_map) {
  let text = emoji_book_open();
  let player_property = "studied";
  let tutorial_property = "tutorial_study";
  await app_g_tutorial(player_property, div_map, tutorial_property, text);
}
