import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_verse_word_redraw } from "./bible_glyph_chapter_verse_word_redraw.mjs";
export async function bible_glyph_chapters_english_word_redraw(word, glyph) {
  arguments_assert(arguments, 2);
  ("$plain word");
  ("$plain glyph");
  ("the word is an English word as the chapters spell it, and the glyph the picture name it is drawn as. Each names something to look up and nothing that runs.");
  ("Draws every whole English word of the written picture Bible that is exactly the word named as the picture named, each verse as its own commit, and answers which verses it drew.");
  ("THIS IS FOR A WORD WHOSE PICTURE NEEDS NO READING. Where a word only ever means one thing, a reader of each sentence would decide the same every time, so the decision is made once by whoever names the word and the picture here. A word that means different things in different sentences belongs to the filed readings instead.");
  ("IT FINDS ITS OWN VERSES, so nothing has to be listed by hand and the list cannot fall out of step with the chapters. A word is matched exactly as spelled, capitals included, so a capitalised word at the start of a sentence is a second run with that spelling.");
  await ai_git_noted();
  let drawn = [];
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let lower = text_lower_to(chapter_code);
    let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
    let s = await file_read(f_path);
    let lines = text_split_newline(s);
    let counts = [];
    let verse_number = null;
    for (let line of lines) {
      let left = text_trim(line);
      let opener = left.match(/^verse_number: (\d+),$/);
      if (not_equal(opener, null)) {
        verse_number = opener[1];
        continue;
      }
      let token = left.match(/^"(.*)",?$/);
      if (equal(token, null) || equal(verse_number, null)) {
        continue;
      }
      let parts = token[1].match(/^([“"‘(]*)(.*?)([.,;:!?”’)]*)$/);
      if (equal(parts[2], word)) {
        list_add(counts, verse_number);
      }
    }
    let verses = [...new Set(counts)];
    for (let v of verses) {
      function lambda(c) {
        let eq = equal(c, v);
        return eq;
      }
      let n = counts.filter(lambda).length;
      let glyphs = Array(n).fill(glyph).join("-");
      if (greater_than(n, 0)) {
        await function_call_commit(bible_glyph_chapter_verse_word_redraw, [
          chapter_code,
          v,
          word,
          glyphs,
        ]);
        list_add(drawn, chapter_code + ":" + v);
      }
    }
  }
  let r = {
    verses: drawn.length,
    drawn,
  };
  return r;
}
