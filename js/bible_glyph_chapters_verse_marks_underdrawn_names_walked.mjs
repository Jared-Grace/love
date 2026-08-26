import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn_walked } from "./bible_glyph_chapters_verse_marks_underdrawn_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_names_walked() {
  arguments_assert(arguments, 0);
  ("Each verse that draws a mark and leaves another word seated on that same mark in plain English letters, written as one word a record can hold: the chapter code, the verse number, the mark's name.");
  ("IT DROPS TWO NUMBERS AND KEEPS THE ADDRESS. The reading next door hands back how many times the mark was drawn and how many times the verse seated it, and the difference between them is how many words were left behind - which changes the size of a repair and never whether there is one. A ratchet is only ever asked whether there is one.");
  ("A RECORD OF THESE MUST BE READABLE BY A PERSON, because what it holds is a list of known faults somebody is eventually going to clear, and the three words together say the whole fault: which chapter to open, which verse to find, and which picture to look for.");
  ("The spaces are safe as joints because none of the three halves can hold one - a chapter code is letters and digits, a verse number is digits, and a mark's name is the repo's own word shape - so the three can always be read back apart.");
  ("The count of how much was reached is carried through rather than worked out here, because nothing on this side of the walk knows how many marks were compared.");
  let told = await bible_glyph_chapters_verse_marks_underdrawn_walked();
  let walked = property_get(told, "walked");
  let entries = property_get(told, "offenders");
  let names = [];
  for (let entry of entries) {
    let name = list_join_space([
      entry.chapter_code,
      entry.verse_number,
      entry.glyph,
    ]);
    list_add(names, name);
  }
  let r = {
    walked,
    offenders: names,
  };
  return r;
}
