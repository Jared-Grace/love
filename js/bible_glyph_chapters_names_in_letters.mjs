import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_names_in_letters } from "./bible_glyph_chapter_names_in_letters.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function bible_glyph_chapters_names_in_letters() {
  "Every place an authored picture Bible chapter spells a proper name in plain English letters where the original has one, over every chapter written so far.";
  "IT IS THE SUM AND THE CHAPTER READING IS THE JUDGEMENT. Every guard, every reason and every thing this can get wrong lives next door, one chapter at a time, because one chapter at a time is what gets drawn and committed. What is left here is the walk and the total, which is the part that has nothing to decide.";
  "THE TOTAL IS WORTH ASKING FOR ON ITS OWN, because the size of the answer is what says whether the badge was worth buying. Eight thousand names in letters is a mark that changes how a great deal of the Bible reads; eighty would have been a footnote, and the same reading would have said so.";
  arguments_assert(arguments, 0);
  let chapters = bible_glyph_chapters();
  let testaments = {};
  let offenders = [];
  let walked = 0;
  for (let chapter of chapters) {
    let told = await bible_glyph_chapter_names_in_letters(chapter.chapter_code);
    property_set(testaments, told.testament_name, true);
    walked = add(walked, told.walked);
    for (let offender of told.offenders) {
      list_add(offenders, offender);
    }
  }
  let r = {
    walked,
    testaments: object_property_names(testaments).length,
    offenders,
  };
  return r;
}
