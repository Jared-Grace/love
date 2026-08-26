import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_walked } from "./bible_glyph_chapters_collision_marks_walked.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { not } from "./not.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { add } from "./add.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function bible_glyph_chapters_collision_marks_unseated_lines() {
  "Lays out the marks a chapter drew on a shared picture where the interlinear seats NO word of that verse on it, so a person can find what the mark was for.";
  "IT PRINTS EVERY WORD OF THE VERSE, NOT A CHOSEN FEW, AND THAT IS THE POINT. The sister printer for ambiguous marks shows only the words already seated on the picture, because there the question is which of them the mark belongs to. Here nothing is seated, so the answer is necessarily among the words the table does not yet know, and narrowing the list before the person sees it would hide the very word being looked for.";
  "THE PICTURE EACH WORD ALREADY CARRIES IS PRINTED BESIDE IT. A word with no picture is a candidate for the seat; a word that already has a different one is not, and telling the two apart by eye is the whole of the work.";
  "IT DECIDES NOTHING AND WRITES NOTHING. A seat is a claim about what a word means, so it stays a person's to make.";
  arguments_assert(arguments, 0);
  let walk = await bible_glyph_chapters_collision_marks_walked();
  let lookup = bible_glyph_characters_lookup([]);
  let lines = [];
  for (let entry of walk.unseated) {
    let chapter_code = entry.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let filed = both.filed;
    let rows = both.rows;
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
      let place = 0;
      for (let word of row.words) {
        place = add(place, 1);
        let root_name = property_get_or_null(filed, word.strong);
        let joined3 = list_join_empty([word.gloss]);
        let joined4 = list_join_empty([word.glyph]);
        let at = list_join_colon(["at", place]);
        let line = list_join_space([
          "   ",
          at,
          joined4,
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
