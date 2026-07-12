import { list_random_item } from "./list_random_item.mjs";
import { g_male_img_names } from "./g_male_img_names.mjs";
export function g_player_img_get() {
  let imgs_men = g_male_img_names();
  let player_img = list_random_item(imgs_men);
  return player_img;
}
