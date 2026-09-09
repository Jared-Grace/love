import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_overdrawn_walked } from "./bible_glyph_chapters_verse_marks_overdrawn_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_verse_marks_overdrawn_names_walked() {
  arguments_assert(arguments, 0);
  ("Each verse that draws a mark more often than its own original words seat it, written as one word a record can hold: the chapter code, the verse number, the mark's name.");
  ("IT DROPS TWO NUMBERS AND KEEPS THE ADDRESS, the same way the reading for the opposite direction does. How many times the mark was drawn and how many times the verse seated it change the size of a repair and never whether there is one, and a ratchet is only ever asked whether there is one.");
  ("A RECORD OF THESE MUST BE READABLE BY A PERSON, because what it holds is a list of judgements somebody has already made verse by verse, and the three words together say where to go and look: which chapter to open, which verse to find, and which picture to weigh against the interlinear.");
  ("The spaces are safe as joints because none of the three halves can hold one - a chapter code is letters and digits, a verse number is digits, and a mark's name is the repo's own word shape - so the three can always be read back apart.");
  ("The count of how much was reached is carried through rather than worked out here, because nothing on this side of the walk knows how many marks were compared.");
  let told = await bible_glyph_chapters_verse_marks_overdrawn_walked();
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
