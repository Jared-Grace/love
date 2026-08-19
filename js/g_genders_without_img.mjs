import { arguments_assert } from "./arguments_assert.mjs";
import { g_genders_get } from "./g_genders_get.mjs";
import { list_without } from "./list_without.mjs";
import { property_transform_multiple } from "./property_transform_multiple.mjs";
export function g_genders_without_img(img) {
  "$plain img";
  "The genders a person in a world can be given, with one picture taken out of every one of them.";
  "The picture taken out is the player's own, and it is taken out because a crowd is drawn from this list: leaving it in would put the player's twin in the street. Both worlds that fill a street with people want exactly this, so the taking out is written here once - a second copy of it would be a second place to remember when a gender gains a picture.";
  arguments_assert(arguments, 1);
  let genders = g_genders_get();
  function imgs_without(imgs) {
    let filtered = list_without(imgs, img);
    return filtered;
  }
  property_transform_multiple(genders, "imgs", imgs_without);
  return genders;
}
