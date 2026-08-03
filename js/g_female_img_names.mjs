import { list_map_combine_left } from "./list_map_combine_left.mjs";
import { range_1 } from "./range_1.mjs";
export function g_female_img_names() {
  "The name of every picture a female character can wear, built from its number rather than listed one by one.";
  let imgs_women_rg = range_1(21);
  let imgs_women = list_map_combine_left(imgs_women_rg, "woman_");
  return imgs_women;
}
