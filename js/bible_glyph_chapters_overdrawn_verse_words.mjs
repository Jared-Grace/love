import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_overdrawn_walked } from "./bible_glyph_chapters_verse_marks_overdrawn_walked.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_overdrawn_verse_words(glyph) {
  arguments_assert(arguments, 1);
  ("$plain glyph");
  ("one picture, spelled as the character table spells it. It names a picture to look for and nothing that runs.");
  ("Every verse that draws the picture more often than the table seats it, with each original word of that verse: its number, the interlinear's English for it, and the picture the table seats it as.");
  ("THE WORDS ARE HANDED BACK WHOLE BECAUSE THE QUESTION AFTER AN OVERDRAWN PICTURE IS WHICH WORD IT WAS DRAWN FOR, and that is read off the English of the words, which no count carries. The pairs reading next door says which seated picture is short; this says which word under it the author meant.");
  let walked = await bible_glyph_chapters_verse_marks_overdrawn_walked();
  let verses = [];
  for (let offender of walked.offenders) {
    if (not_equal(offender.glyph, glyph)) {
      continue;
    }
    let both = await bible_glyph_chapter_rows_filed(offender.chapter_code);
    function verse_is(row) {
      let b = equal(row.verse_number, offender.verse_number);
      return b;
    }
    let row = both.rows.find(verse_is);
    function word_line(word) {
      let line = word.strong + " " + word.gloss + " = " + word.glyph;
      return line;
    }
    list_add(verses, {
      chapter_code: offender.chapter_code,
      verse_number: offender.verse_number,
      drew: offender.drew,
      seats: offender.seats,
      words: row.words.map(word_line),
    });
  }
  return verses;
}
