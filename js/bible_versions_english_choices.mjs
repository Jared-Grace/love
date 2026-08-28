import { bible_folder_key } from "./bible_folder_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_en_name } from "./ebible_language_en_name.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_licence_commercial_is } from "./ebible_licence_commercial_is.mjs";
import { list_map } from "./list_map.mjs";
export function bible_versions_english_choices(versions) {
  "$plain versions";
  "Every English translation on one shelf of versions, each against what it calls itself, the terms it is offered on, and whether those terms leave us free to ship it and to earn from what is built on it.";
  "WHICH SHELF IS RECEIVED RATHER THAN REACHED FOR, and that is the whole of what a caller adds. The four things a person choosing a wording needs to know about a translation are the same four whichever shelf it came off, so a comparison of wordings can put the lists end to end and read them as one - and a second shape would make every reader do the joining by hand.";
  "THE LANGUAGE IS ASKED FOR BY THE PLAIN NAME EACH ENTRY WRITES, not by its code. The shelves do not agree on how many letters a language code gets - eBible's English is two and the Door43 catalogue's entries write three - so a comparison keyed on the code would quietly hold nothing. The plain name is the one word every side already spells the same way, and using it needs no third spelling invented to sit between them.";
  arguments_assert(arguments, 1);
  let english = ebible_language_en_name();
  let held = list_filter_property(versions, "language_name", english);
  function bible_versions_english_choices_choice(record) {
    let bible_folder = property_get(record, bible_folder_key());
    let name = property_get(record, "name");
    let licence = property_get(record, "licence");
    let commercial = ebible_licence_commercial_is(licence);
    let v = {
      bible_folder,
      name,
      licence,
      commercial,
    };
    return v;
  }
  let choices = list_map(held, bible_versions_english_choices_choice);
  return choices;
}
