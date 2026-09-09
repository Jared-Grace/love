import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_marks_doubled_walked } from "./bible_glyph_chapters_marks_doubled_walked.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_marks_doubled_names_walked() {
  arguments_assert(arguments, 0);
  ("Each mark a chapter draws at least twice as often as the table seats it, written as one word a record can hold: the chapter code, a space, the mark's name.");
  ("IT DROPS TWO NUMBERS AND KEEPS THE ONE THING A RATCHET IS ASKED. The reading next door hands back how many times the mark was drawn and how many times it was seated, and the pair is what a person repairing one of these opens it for. A record is only ever asked whether there is a fault, and the two counts move every time a chapter is edited, so writing them into the file would make it go stale on edits that fixed nothing and broke nothing.");
  ("A RECORD OF THESE MUST BE READABLE BY A PERSON, because what it holds is a list of known faults somebody is eventually going to clear, and the chapter and the mark together say the whole of where to look.");
  let told = await bible_glyph_chapters_marks_doubled_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let names = [];
  for (let entry of offenders) {
    let name = text_combine_3(entry.chapter_code, " ", entry.glyph);
    list_add(names, name);
  }
  let r = {
    walked,
    offenders: names,
  };
  return r;
}
