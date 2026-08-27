import { arguments_assert } from "./arguments_assert.mjs";
import { sword_versions } from "./sword_versions.mjs";
import { ebible_language_en_name } from "./ebible_language_en_name.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_licence_commercial_is } from "./ebible_licence_commercial_is.mjs";
import { list_map } from "./list_map.mjs";
export function sword_versions_english_choices() {
  arguments_assert(arguments, 0);
  ("Every English translation this repo carries as a Sword module rather than from eBible or Door43, each against what it calls itself, the terms it is offered on, and whether those terms leave us free to ship it and to earn from what is built on it.");
  ("IT ANSWERS IN THE SAME SHAPE THE OTHER TWO SHELVES ANSWER IN, so a comparison of wordings can put all three lists end to end and read them as one. The four things a person choosing a wording needs to know about a translation are the same four whichever shelf it came off, and a third shape here would make every reader do the joining by hand.");
  ("THE LANGUAGE IS ASKED FOR BY THE PLAIN NAME EACH ENTRY WRITES, not by its code. The shelves do not agree on how many letters a language code gets, so a comparison keyed on the code would quietly hold nothing. The plain name is the one word every side already spells the same way.");
  let versions = sword_versions();
  let english = ebible_language_en_name();
  let held = list_filter_property(versions, "language_name", english);
  function choice(record) {
    let bible_folder = property_get(record, "bible_folder");
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
  let choices = list_map(held, choice);
  return choices;
}
