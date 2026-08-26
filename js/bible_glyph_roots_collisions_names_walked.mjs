import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_collisions_walked } from "./bible_glyph_roots_collisions_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_roots_collisions_names_walked() {
  arguments_assert(arguments, 0);
  ("Each picture standing for more than one root, written as one word a record can hold: the picture's name, then the roots sharing it joined by pluses.");
  ("THE TESTAMENT IS DROPPED AND NOTHING IS LOST BY IT, because a root already names its testament. There is no Hebrew root called christos and no Greek one called shem, so the two lines that both begin with no_entry are still told apart by what follows - lo and al on one, ou and me on the other. Spelling the testament as well would put a space inside a half and stop the name reading back apart.");
  ("THE ROOTS ARE SORTED SO THE NAME DOES NOT MOVE WHEN THE TABLE DOES. The order they arrive in is the order the table happens to list them, so inserting a root above another would rewrite a name that stands for the very same fault, and the ratchet would read that as one offence cleared and a new one arriving. Which of two sharers was written first says nothing, so it is not allowed to say anything.");
  ("The count of how much was reached is carried through rather than worked out here, because nothing on this side of the walk knows how many pictures were compared.");
  let told = bible_glyph_roots_collisions_walked();
  let walked = property_get(told, "walked");
  let entries = property_get(told, "offenders");
  let names = [];
  for (let entry of entries) {
    let sorted = list_sort_text(entry.roots);
    let sharers = list_join_plus(sorted);
    let name = list_join_space([entry.glyph, sharers]);
    list_add(names, name);
  }
  let r = {
    walked,
    offenders: names,
  };
  return r;
}
