import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_walked } from "./bible_glyph_chapters_collision_marks_walked.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_roots_root_lookup } from "./bible_glyph_roots_root_lookup.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function bible_glyph_chapters_collision_marks_ambiguous_lines() {
  "The marks the interlinear could NOT decide, each one laid out with everything a person needs to decide it by hand: the verse as a reader sees it drawn, and every original word in that verse the shared picture is seated on, in the order the original puts them.";
  "IT IS THE SHORT LIST AT THE END OF A LONG READING and it only means anything because that reading came first. Deciding which of two roots a drawn mark stood for is hundreds of verses if it is done by hand from the start; almost all of them name only one of the pair and settle themselves. What is left here is the residue, and the residue is small enough to read in one sitting.";
  "BOTH SIDES ARE PRINTED BECAUSE NEITHER SETTLES IT ALONE. The drawn verse says where the marks are and in what order; the original words say which roots are in play and in what order. A verse that draws as many marks as the original has occurrences is usually decided by lining the two up, and a verse that draws fewer is a choice somebody made and has to be read.";
  "IT DECIDES NOTHING AND WRITES NOTHING. What comes out is text for a person, because the reason these are here at all is that no rule the interlinear can state reaches them.";
  arguments_assert(arguments, 0);
  let walk = await bible_glyph_chapters_collision_marks_walked();
  let lookup = bible_glyph_characters_lookup();
  let chapter_rows = {};
  let chapter_filed = {};
  let lines = [];
  for (let entry of walk.ambiguous) {
    let chapter_code = entry.chapter_code;
    let fetched = property_exists(chapter_rows, chapter_code);
    if (not(fetched)) {
      let testament_name = bible_chapter_testament_name(chapter_code);
      let roots = bible_glyph_roots_testament_table(testament_name);
      let value = bible_glyph_roots_root_lookup(roots);
      property_set(chapter_filed, chapter_code, value);
      let rows = await bible_glyph_chapter_draft_words(
        chapter_code,
        testament_name,
      );
      property_set(chapter_rows, chapter_code, rows);
    }
    let filed = property_get(chapter_filed, chapter_code);
    let rows = property_get(chapter_rows, chapter_code);
    let joined = list_join_colon(["v", entry.verse_number]);
    let joined2 = list_join_colon(["drew", entry.drew]);
    let heading = list_join_space([chapter_code, joined, entry.glyph, joined2]);
    list_add(lines, heading);
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let here = equal(verse.verse_number, entry.verse_number);
      if (here) {
        let item = bible_glyph_verse_draw(verse.words, lookup);
        list_add(lines, item);
      }
    }
    for (let row of rows) {
      let here = equal(row.verse_number, entry.verse_number);
      if (not(here)) {
        continue;
      }
      for (let word of row.words) {
        let seated = equal(word.glyph, entry.glyph);
        if (not(seated)) {
          continue;
        }
        let root_name = property_get(filed, word.strong);
        let joined3 = list_join_empty([word.gloss]);
        let line = list_join_space([
          "   ",
          root_name,
          word.strong,
          word.original,
          joined3,
        ]);
        list_add(lines, line);
      }
    }
    list_add(lines, "");
  }
  let text = list_join_newline(lines);
  return text;
}
