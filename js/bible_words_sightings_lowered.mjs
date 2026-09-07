import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
export function bible_words_sightings_lowered(sightings) {
  "One translation's words gathered in small letters: how often each is written however it was capitalised, and the first place each was met.";
  "A word opening a sentence is written large and the same word inside one is written small, and a reading that keeps those apart has two rare words where the translation has one common one. That matters most exactly where rarity is the signal, because it is the capitalised spellings that end up looking rare.";
  "The counts are added and the first sighting is kept, never written over. The first sighting of the small spelling is whichever came first in the reading, and the large one is only kept when nothing smaller was met before it.";
  "$plain sightings";
  "every word the translation uses with how often and where it was first met, as its publisher wrote it.";
  arguments_assert(arguments, 1);
  let counts = {};
  let firsts = {};
  let spellings = object_property_names(sightings);
  function spelling_note(spelling) {
    let lower = text_lower_to(spelling);
    let sighting = property_get(sightings, spelling);
    let count = property_get(sighting, "count");
    let so_far = property_get_or_null(counts, lower);
    let fresh = null_is(so_far);
    if (fresh) {
      property_set(counts, lower, count);
      property_set(firsts, lower, sighting);
      return;
    }
    let more = add(so_far, count);
    property_set(counts, lower, more);
  }
  each(spellings, spelling_note);
  let r = {
    counts,
    firsts,
  };
  return r;
}
