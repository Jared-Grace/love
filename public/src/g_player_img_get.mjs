import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { g_male_img_names } from "../../../love/public/src/g_male_img_names.mjs";
export function g_player_img_get() {
  let imgs_men1 = g_male_img_names();
  const player_img = list_random_item(imgs_men1);
  return player_img;
}
