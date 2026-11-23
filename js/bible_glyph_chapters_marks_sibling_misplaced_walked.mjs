import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_marks_sibling_misplaced } from "./bible_glyph_verse_marks_sibling_misplaced.mjs";
export async function bible_glyph_chapters_marks_sibling_misplaced_walked() {
  "Every mark in every picture Bible chapter that its draft row asks to be its sibling instead - eye for eyes, ear for hearing - with how many verses holding such a mark were reached.";
  "The judging is one verse at a time and lives next door; this only walks the chapters and pairs each verse with its draft rows. The count is of verses the draft gives one of these marks at all, because that is the number that falls if the walk stops reaching the draft.";
  arguments_assert(arguments, 0);
  let walked = 0;
  let offenders = [];
  for (let listed of bible_glyph_chapters()) {
    let chapter_code = listed.chapter_code;
    let filed = await bible_glyph_chapter_rows_filed(chapter_code);
    let rows_by = {};
    for (let row of filed.rows) {
      rows_by[row.verse_number ?? row.verse] = row.words;
    }
    for (let verse of bible_glyph_chapter(chapter_code).verses) {
      let rows = rows_by[verse.verse_number] || [];
      let found = bible_glyph_verse_marks_sibling_misplaced(verse.words, rows);
      function lambda(row) {
        let r2 = ["eye", "eyes", "ear", "ear+loudspeaker"].includes(row.glyph);
        return r2;
      }
      let has = rows.some(lambda);
      if (has) {
        walked++;
      }
      for (let one of found) {
        offenders.push({
          chapter_code,
          verse_number: verse.verse_number,
          ...one,
        });
      }
    }
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
