import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { add } from "./add.mjs";
import { equal_not } from "./equal_not.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_word_entry_replace(
  chapter_code,
  word,
  entry,
) {
  "Rewrites every entry of one written picture Bible chapter that is exactly one given word, replacing it with a given entry.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and nothing that runs.";
  "$plain word";
  "the word is the English the chapter currently spells out, given exactly as the chapter spells it, capital letter and all. It names text to find and nothing that runs.";
  "$plain entry";
  "the entry is the shorthand to write in that word's place, given as the chapter spells shorthand and without the quotes around it. It is written down as text and nothing about it runs.";
  "IT IS THE HALF OF REDRAWING THAT IS THE SAME WHATEVER IS BEING DRAWN, and it was pulled out of the mark writer the day a second thing needed drawing. Seating a root and badging a name put different text in the entry and do everything else identically - find the whole entries, keep the indent, refuse a word that was never there - so the difference between them is now one argument rather than one file.";
  "IT REPLACES ONLY A WORD STANDING ALONE AS ITS OWN ENTRY, never a run of letters inside a longer one. The chapters carry their reasoning in prose above the verses and that prose says the English word constantly - the paragraph arguing that a word had no seat contains the word itself - so a plain text replacement would rewrite the argument along with the text. A whole entry is the only thing a reader of the verses ever sees.";
  "IT REFUSES A WORD IT DID NOT FIND, because the failure being guarded against is a misspelling that reports success. Nothing else here would notice: the file is written back unchanged, the gates stay green because the chapter was already consistent, and the chapter simply never gets redrawn. So nought replacements is an error rather than an answer.";
  arguments_assert(arguments, 3);
  let lower = text_lower_to(chapter_code);
  let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
  let before = await file_read(f_path);
  let lines = text_split_newline(before);
  let bare = text_combine_3('"', word, '"');
  let with_comma = text_combine(bare, ",");
  let entry_bare = text_combine_3('"', entry, '"');
  let entry_comma = text_combine(entry_bare, ",");
  let written = [];
  let replaced = 0;
  for (let line of lines) {
    let trimmed = text_trim(line);
    let is_comma = equal(trimmed, with_comma);
    let is_bare = equal(trimmed, bare);
    let hit = or(is_comma, is_bare);
    if (not(hit)) {
      list_add(written, line);
      continue;
    }
    let indent = text_replace_once(line, trimmed, "");
    let mark = entry_bare;
    if (is_comma) {
      mark = entry_comma;
    }
    let item = text_combine(indent, mark);
    list_add(written, item);
    replaced = add(replaced, 1);
  }
  let found = equal_not(replaced, 0);
  assert_json(found, {
    f_path,
    word,
    hint: "no entry of that chapter is exactly that word, so nothing was redrawn - check the spelling and the capital letter against the chapter itself",
  });
  let contents = list_join_newline(written);
  await file_overwrite(f_path, contents);
  let r = {
    f_path,
    chapter_code,
    word,
    entry,
    replaced,
  };
  return r;
}
