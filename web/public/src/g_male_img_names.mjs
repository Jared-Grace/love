import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { g_male_img_ids } from "../../../love/public/src/g_male_img_ids.mjs";
export function g_male_img_names() {
  let imgs_men_rg = g_male_img_ids();
  let imgs_men = list_map_combine_left(imgs_men_rg, "man_");
  return imgs_men;
}
