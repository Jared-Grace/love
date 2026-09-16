import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_compare_tokens } from "./bible_glyph_compare_tokens.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapters_gloss_column_walked() {
  "Every verse of the picture Bible whose words are the interlinear's gloss column copied out rather than English somebody wrote.";
  "★ SOME CHAPTERS WERE NEVER AUTHORED AT ALL AND NOTHING SAYS SO. A chapter can be produced by walking the interlinear's glosses straight down, putting a picture's name where a word is seated and dropping that word's gloss. Hebrew puts the verb before its subject, so what comes out is not English - and it is not broken in any way a reader of the file can see, because every line is well formed, every picture is seated correctly and the verse count is right. Numbers 30 read like that for as long as it has existed.";
  "★ THE TEST IS RECONSTRUCTION AND NOT A GUESS ABOUT STYLE. The gloss column is not a hint about how a verse was made; it is a thing that can be built again from the interlinear, word for word, and compared. Nothing here is asked about how a sentence reads, so nothing here can be argued with.";
  "★ ONE VERSE MATCHING PROVES NOTHING AND A CHAPTER OF THEM PROVES IT OUTRIGHT. The gloss column and plain English are the same sentence whenever the original already stood in English order, which short and simple verses constantly do - He must increase; I must decrease matches piece for piece and is perfectly written. Measured over the whole Bible on 2026-09-16, 351 verses of 10688 match, which is one verse in thirty falling out that way by itself. So a chapter holding a few is telling you nothing, and a chapter holding nine in ten is telling you it was never written, because that rate cannot arise one verse at a time. READ per_chapter AND NEVER A LINE OF copied ON ITS OWN.";
  "IT ANSWERS SHORT OF THE TRUTH IN ONE DIRECTION AND PAST IT IN THE OTHER, and the two are not the same mistake. A generated verse somebody afterwards touched by hand no longer matches and is missed, so a chapter's share is a floor on how much of it was copied. A verse that matches by coincidence is counted, so the share is also lifted by about one in thirty everywhere. Both are small against a chapter in the nineties and neither is small against a chapter in the teens.";
  "A PICTURE INSIDE A WORD CANNOT BE A COPIED COLUMN AND NEEDS NO EXCEPTION. An author writes false$megaphone$s and Be$heart_red$d, welding the picture into the English word it stands in; the column puts a picture down as a word of its own. The comparison is between whole pieces, so a welded picture simply fails to match and the verse is reported as authored, which it is.";
  arguments_assert(arguments, 0);
  let chapters = bible_glyph_chapters();
  let copied = [];
  let per_chapter = [];
  let verses_read = 0;
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let column_by_verse = {};
    for (let row of both.rows) {
      let column = [];
      for (let word of row.words) {
        let b = equal(word.glyph, "");
        let seated = not(b);
        if (seated) {
          list_add(column, "$" + word.glyph);
          continue;
        }
        for (let one of bible_glyph_compare_tokens(word.gloss)) {
          list_add(column, one);
        }
      }
      property_set(column_by_verse, row.verse_number, column);
    }
    let matched = 0;
    for (let verse of chapter.verses) {
      verses_read = add(verses_read, 1);
      let column = property_get_or_null(column_by_verse, verse.verse_number);
      let unknown = null_is(column);
      if (unknown) {
        continue;
      }
      let text = list_join_space(verse.words);
      let stored = bible_glyph_compare_tokens(text);
      let same = json_equal(stored, column);
      if (not(same)) {
        continue;
      }
      matched = add(matched, 1);
      list_add(copied, {
        chapter_code,
        verse_number: verse.verse_number,
        tokens: list_size(column),
      });
    }
    let held = list_size(chapter.verses);
    let none = equal(matched, 0);
    if (none) {
      continue;
    }
    list_add(per_chapter, {
      chapter_code,
      reference: chapter.reference,
      copied: matched,
      verses: held,
      whole_is: equal(matched, held),
    });
  }
  let r = {
    chapters: list_size(chapters),
    verses_read,
    copied_verses: list_size(copied),
    chapters_touched: list_size(per_chapter),
    per_chapter,
    copied,
  };
  return r;
}
