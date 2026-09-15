import { arguments_assert } from "./arguments_assert.mjs";
import { g_female_img_names } from "./g_female_img_names.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function g_player_img_female_get() {
  arguments_assert(arguments, 0);
  ("A picture for a player who is a woman, drawn at random from every picture a female character can wear.");
  let imgs_women = g_female_img_names();
  let player_img = list_random_item(imgs_women);
  return player_img;
}
