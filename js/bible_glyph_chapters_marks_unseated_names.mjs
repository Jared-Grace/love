import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_marks_unseated } from "./bible_glyph_chapters_marks_unseated.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_marks_unseated_names() {
  arguments_assert(arguments, 0);
  ("Each mark drawn in a chapter the root table never seats it in, written as one word a record can hold: the chapter code, a space, the mark's name.");
  ("IT DROPS TWO NUMBERS AND LOSES NOTHING. The reading next door hands back how many times the mark was drawn and how many times it was seated, and the second of those is nought for every entry here - that is what puts the entry in this list at all. The first is how many times one mistake was repeated, which changes the size of a repair and never whether there is one, and a ratchet is only ever asked whether there is one.");
  ("A RECORD OF THESE MUST BE READABLE BY A PERSON, because the thing it holds is a list of known faults somebody is eventually going to clear, and the two words together say the whole fault: which chapter to open and which picture to look for. A record of shapes would say the same thing and could not be read at a glance or compared line by line in a diff.");
  ("The space between them is safe as a joint because neither half can hold one - a chapter code is letters and digits and a mark's name is the repo's own word shape - so the pair can always be read back apart.");
  let entries = await bible_glyph_chapters_marks_unseated();
  let names = [];
  for (let entry of entries) {
    let name = text_combine_3(entry.chapter_code, " ", entry.glyph);
    list_add(names, name);
  }
  return names;
}
