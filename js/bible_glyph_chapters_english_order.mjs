import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter_english_order } from "./bible_glyph_chapter_english_order.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapters_english_order() {
  arguments_assert(arguments, 0);
  ("Every verse of the written picture Bible whose plain English words do not stand in the order the Berean wording puts them in, with how many chapters and verses were read to find them.");
  ("THE FAULT IS A VERSE WRITTEN IN THE ORIGINAL'S ORDER RATHER THAN IN ENGLISH. It is invisible to every other reading of this Bible, because a verse can have every picture correctly seated on the right root and still be a sentence in no language at all. Only the translation the words came from can say they have moved.");
  ("IT WALKS THE WHOLE BIBLE ONE CHAPTER AT A TIME because the English has to be fetched per chapter, and the fetch is what the walk costs. ",
    fn_name("bible_glyph_chapter_english_order"),
    " holds the rule, and this walks the Bible past it.");
  ("IT COUNTS THE CHAPTERS AND THE VERSES IT READ beside the offenders, so an empty answer can be told from a walk that reached nothing.");
  let chapters = bible_glyph_chapters();
  let verses_read = 0;
  let offenders = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let reading = await bible_glyph_chapter_english_order(chapter_code);
    verses_read = verses_read + property_get(reading, "verses_read");
    list_add_multiple(offenders, property_get(reading, "offenders"));
  }
  let r = {
    chapters: list_size(chapters),
    verses_read,
    offenders,
  };
  return r;
}
