import { arguments_assert } from "./arguments_assert.mjs";
import { door43_versions } from "./door43_versions.mjs";
import { ebible_language_code_english } from "./ebible_language_code_english.mjs";
import { ebible_licence_commercial_is } from "./ebible_licence_commercial_is.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function door43_versions_english_choices() {
  arguments_assert(arguments, 0);
  ("Every English translation this repo carries from Door43 rather than from eBible, each against what it calls itself, the terms it is offered on, and whether those terms leave us free to ship it and to earn from what is built on it.");
  ("IT ANSWERS IN THE SAME SHAPE THE EBIBLE SIDE ANSWERS IN, so a comparison of wordings can put the two lists end to end and read them as one. The four things a person choosing a wording needs to know about a translation are the same four whichever shelf it came off, and a second shape here would make every reader of both sides do the joining by hand.");
  ("THESE ARE NOT WHOLE BIBLES AND THAT IS WHY THEY ARE LISTED APART. The eBible side is defined as the translations we hold all sixty-six books of, and these two are published a book at a time - fifty-six of the sixty-six at the release read here. Folding them in would either break that definition or lose them, so they are their own list and the comparison holds both.");
  ("The language is asked for by its code rather than by the English word for it, because the code is what every other list here joins a bible to a language by.");
  let versions = door43_versions();
  let english = ebible_language_code_english();
  let held = list_filter_property(versions, "language_code", english);
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
