import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_choices } from "./ebible_versions_english_choices.mjs";
import { ebible_versions_copyrights } from "./ebible_versions_copyrights.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { ebible_licence_commercial_is } from "./ebible_licence_commercial_is.mjs";
import { list_map } from "./list_map.mjs";
export async function ebible_versions_english_choices_licences() {
  "Every English translation this repo holds all sixty-six books of, each against what it calls itself, the terms it is offered on, and whether those terms leave us free to ship it and to earn from what is built on it.";
  "CHOOSING WHICH ENGLISH WORDING TO QUOTE IS TWO QUESTIONS AT ONCE - which translations are here in full, and which of those a reader may lawfully be shown. Both are already answered, in two places, and every time somebody asks they are joined by hand; joined here the answer reads in one pass and the joining cannot be got wrong twice.";
  "The terms are read off the licence pages rather than written down, so a translation whose terms change at eBible changes here too.";
  arguments_assert(arguments, 0);
  let english_choices = await ebible_versions_english_choices();
  let copyrights = await ebible_versions_copyrights();
  function chosen_is(copyright_read) {
    let bible_folder = property_get(copyright_read, "bible_folder");
    let chosen = list_includes(english_choices, bible_folder);
    return chosen;
  }
  let chosen_copyrights = list_filter(copyrights, chosen_is);
  function licence_record(copyright_read) {
    let bible_folder = property_get(copyright_read, "bible_folder");
    let name = property_get(copyright_read, "name");
    let licence = property_get(copyright_read, "licence");
    let commercial = ebible_licence_commercial_is(licence);
    let record = {
      bible_folder,
      name,
      licence,
      commercial,
    };
    return record;
  }
  let licences = list_map(chosen_copyrights, licence_record);
  return licences;
}
