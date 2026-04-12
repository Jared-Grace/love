import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
export function g_female_img_names() {
  let imgs_women_rg = range_1(21);
  let imgs_women = list_map_combine_left(imgs_women_rg, "woman_");
  return imgs_women;
}
