import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_collision_picture_name } from "./bible_glyph_collision_picture_name.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_glyph_collision_mark_name(entry) {
  "$plain entry";
  "Where one undecided mark is, written as one line a record can hold and a person can act on: the chapter code, the verse, the picture, and the roots sharing it.";
  "A RECORD OF THESE HAS TO SAY WHAT TO OPEN. What it holds is a list of marks somebody will eventually sit down and read, and the four parts together are the whole instruction - which chapter, which verse in it, which picture to look for, and which two words it could have been. A record of shapes would carry the same facts and could not be read at a glance or compared line by line in a diff.";
  "It drops how many marks the verse drew on that picture. That number changes the size of one reading and never whether there is one, and a ratchet is only ever asked whether there is one.";
  "The joints are safe because none of the four parts can hold one: a chapter code is letters and digits, a verse is a number behind a letter, and the picture name is the repo's own word shape.";
  arguments_assert(arguments, 1);
  let picture = bible_glyph_collision_picture_name(entry);
  let verse = list_join_colon(["v", entry.verse_number]);
  let name = list_join_space([entry.chapter_code, verse, picture]);
  return name;
}
