import { g_gender_male } from "./g_gender_male.mjs";
import { bible_names_men } from "./bible_names_men.mjs";
import { list_without } from "./list_without.mjs";
import { g_gender_female } from "./g_gender_female.mjs";
import { bible_names_women } from "./bible_names_women.mjs";
import { g_male_img_names } from "./g_male_img_names.mjs";
import { g_female_img_names } from "./g_female_img_names.mjs";
export function g_genders_names() {
  let imgs_women = g_female_img_names();
  let imgs_men = g_male_img_names();
  let names_women = bible_names_women();
  let female = {
    name: g_gender_female(),
    names: names_women,
    imgs: imgs_women,
  };
  let names_men = bible_names_men();
  let male = {
    name: g_gender_male(),
    names: names_men,
    imgs: imgs_men,
  };
  let genders = [male, female];
  return genders;
}
