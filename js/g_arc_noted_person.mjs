import { arguments_assert } from "./arguments_assert.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function g_arc_noted_person(noted_people, index) {
  "$plain index";
  "The addresses one person's last revision was asked to answer, picked out of a whole chapter's record of them.";
  "NOBODY RECORDED IS AN EMPTY LIST RATHER THAN NOTHING, and this is where it parts from the arc lookup beside it. Every caller is about to ask whether a given address is in the answer, and for a person never revised the answer is no, for every address - which an empty list already says. Handed back as nothing, each caller would have to say it again for itself, and one of them forgetting to reads as an arc with no asks rather than a page about to throw.";
  "THE NUMBER IS COMPARED AS A NUMBER, the same as the arc lookup, so a caller holding text off a command line turns it into one before asking. Text one never matches the number one, and the miss is silent - it finds nobody and reads as a person who was never asked anything.";
  arguments_assert(arguments, 2);
  let found = list_find_property_or_null(noted_people, "index", index);
  let missing = equal(found, null);
  if (missing) {
    let empty = [];
    return empty;
  }
  let addresses = property_get(found, "addresses");
  return addresses;
}
