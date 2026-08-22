import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { bible_glyph_chapter_glyph_names } from "./bible_glyph_chapter_glyph_names.mjs";
import { bible_glyph_chapters_table_behind_glyphs } from "./bible_glyph_chapters_table_behind_glyphs.mjs";
import { bible_glyph_chapters_table_behind_missing } from "./bible_glyph_chapters_table_behind_missing.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function bible_glyph_chapters_table_behind_chapter(
  chapters,
  deliberate,
  settled,
  behind,
) {
  "Each authored picture chapter measured against the root table in turn, adding to the list of chapters that have fallen behind the ones that have, and to the list of settled decisions every picture a chapter refused on purpose.";
  "IT WRITES INTO TWO LISTS IT WAS HANDED rather than returning them, because the two answers are gathered across every chapter and only mean anything together.";
  "A CHAPTER WITH NOTHING LEFT IS NOT MENTIONED, not even as an empty entry, so the length of the answer is the count of chapters actually behind.";
  arguments_assert(arguments, 4);
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let testament_name = bible_chapter_testament_name(chapter_code);
    let drawn = bible_glyph_chapter_glyph_names(chapter_code);
    let used = {};
    for (let name of drawn) {
      property_set(used, name, true);
    }
    let rows = await bible_glyph_chapter_draft_words(
      chapter_code,
      testament_name,
    );
    let missing = bible_glyph_chapters_table_behind_missing(rows, used);
    let glyphs = bible_glyph_chapters_table_behind_glyphs(
      missing,
      deliberate,
      chapter_code,
      settled,
    );
    let none = list_empty_is(glyphs);
    if (none) {
      continue;
    }
    list_add(behind, {
      chapter_code,
      glyphs,
    });
  }
}
