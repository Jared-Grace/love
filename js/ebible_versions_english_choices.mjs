import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_web_family } from "./ebible_versions_english_web_family.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { properties_get } from "./properties_get.mjs";
import { ebible_versions_english_full } from "./ebible_versions_english_full.mjs";
export async function ebible_versions_english_choices() {
  "Every complete English translation on this disk that a person choosing a wording could be offered, with the six printings of the World English Bible standing as none of them.";
  "THE FAMILY IS NAMED, NOT GUESSED AT BY ITS FIRST LETTERS. Six letters used to stand in for the list and took Webster's revision of the King James down with it, unasked and unreported. The names now live where they can be read.";
  arguments_assert(arguments, 0);
  let object = await ebible_versions_english_full();
  let properties = properties_get(object);
  let web_family = ebible_versions_english_web_family();
  function chosen_is(bible_folder) {
    let outside = list_includes_not(web_family, bible_folder);
    return outside;
  }
  let english_choices = list_filter(properties, chosen_is);
  return english_choices;
}
