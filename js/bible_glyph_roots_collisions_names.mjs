import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_collisions_names_walked } from "./bible_glyph_roots_collisions_names_walked.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_roots_collisions_names() {
  arguments_assert(arguments, 0);
  ("Each picture standing for more than one root, written as one word a record can hold: the picture's name, then the roots sharing it joined by pluses.");
  ("The writer of this ratchet's record wants nothing else. A record is a list of names, and how many pictures were compared is not one of them, so the count is read off next door and left behind rather than written into a file where it would go stale the moment a root was added.");
  let told = bible_glyph_roots_collisions_names_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
