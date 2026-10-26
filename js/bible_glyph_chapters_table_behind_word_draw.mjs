import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_table_behind_word_draw } from "./bible_glyph_chapter_table_behind_word_draw.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_table_behind_word_draw() {
  arguments_assert(arguments, 0);
  ("Runs the second pass over every written picture Bible chapter in turn, drawing each picture the table now seats that a chapter never draws wherever the interlinear and the English agree on one single word, and answers how many each chapter drew and left.");
  ("IT FINDS ITS OWN SET, so no list of chapters is typed and none can fall behind what has been written.");
  ("IT ANSWERS COUNTS AND NOT THE WORDS. Every word drawn is already its own commit under its own name, so the commits are the full record; the answer only has to say which chapters moved and how much each one still leaves for a person.");
  let chapters = [];
  let drew_total = 0;
  let left_total = 0;
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let r = await bible_glyph_chapter_table_behind_word_draw(chapter_code);
    let drew = r.drew.length;
    let left = r.left.length;
    drew_total = drew_total + drew;
    left_total = left_total + left;
    list_add(chapters, {
      chapter_code,
      drew,
      left,
    });
  }
  let result = {
    drew_total,
    left_total,
    chapters,
  };
  return result;
}
