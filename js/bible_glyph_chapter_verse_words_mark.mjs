import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { text_split_dash } from "./text_split_dash.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_verse_word_mark } from "./bible_glyph_chapter_verse_word_mark.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_verse_words_mark(marks_comma) {
  "Draws a list of marks, each on one plain word of one verse, and commits each verse's mark on its own under its own arguments.";
  "$plain marks_comma";
  "each mark is a chapter code, verse number, word, occurrence and mark name joined by dashes, and the marks are joined by commas. It names words and pictures and nothing that runs.";
  "A LIST OF VERSES DECIDED BY READING THEM IS A CHOICE, NOT SOMETHING A COMMAND CAN FIND FOR ITSELF, so this takes the set rather than deriving it. Each verse still commits alone, so every commit reads as the one mark it drew and a peer's sweep can take at most one of them.";
  arguments_assert(arguments, 1);
  await ai_git_noted();
  let drew = [];
  for (let mark of text_split_comma(marks_comma)) {
    let parts = text_split_dash(mark);
    let done = await function_call_commit(
      bible_glyph_chapter_verse_word_mark,
      parts,
    );
    list_add(drew, done);
  }
  return drew;
}
