import { list_map_combine_left } from "./list_map_combine_left.mjs";
import { g_male_img_ids } from "./g_male_img_ids.mjs";
export function g_male_img_names() {
  "The name of every picture a male character can wear, built from its number rather than listed one by one.";
  let imgs_men_rg = g_male_img_ids();
  let imgs_men = list_map_combine_left(imgs_men_rg, "man_");
  return imgs_men;
}
