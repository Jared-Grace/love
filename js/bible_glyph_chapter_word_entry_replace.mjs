import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { js_text_literal } from "./js_text_literal.mjs";
import { bible_glyph_chapter_line_entry_replace } from "./bible_glyph_chapter_line_entry_replace.mjs";
import { list_add } from "./list_add.mjs";
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
  "IT REPLACES ONLY A WORD STANDING ALONE AS ITS OWN ENTRY, never a run of letters inside a longer one, and what counts as standing alone is decided one line away rather than here. The chapters carry their reasoning in prose above the verses and that prose says the English word constantly - the paragraph arguing that a word had no seat contains the word itself - so a plain text replacement would rewrite the argument along with the text. A whole entry is the only thing a reader of the verses ever sees.";
  "IT REFUSES A WORD IT DID NOT FIND, because the failure being guarded against is a misspelling that reports success. Nothing else here would notice: the file is written back unchanged, the gates stay green because the chapter was already consistent, and the chapter simply never gets redrawn. So nought replacements is an error rather than an answer.";
  "THE QUOTATION MARKS ROUND AN ENTRY ARE ASKED FOR RATHER THAN TYPED, because a word can carry one of its own. A word that closes a line of speech keeps the closing quotation mark - Genesis twenty seven carries Esau with one - and the formatter then writes that entry in single quotes, since that is the spelling needing no escape. Putting a double quote on each end looks for a line that is not in the file, and the refusal above then reports the word missing from a chapter that names it twenty times. The speller next door knows the formatter's rule, so both halves are spelled by it.";
  "WHAT IS LEFT HERE IS THE WALK AND THE REFUSAL, which is all that was ever particular to a whole chapter. A verse wants the same matching over a shorter run of lines, and while each writer carried its own copy of it the two drifted - the short-verse shape and the quoted word were mended here and stayed broken there. So the matching moved to its own name and both writers ask it.";
  arguments_assert(arguments, 3);
  let lower = text_lower_to(chapter_code);
  let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
  let before = await file_read(f_path);
  let lines = text_split_newline(before);
  let bare = js_text_literal(word);
  let entry_bare = js_text_literal(entry);
  let written = [];
  let replaced = 0;
  for (let line of lines) {
    let done = bible_glyph_chapter_line_entry_replace(line, bare, entry_bare);
    list_add(written, done.line);
    replaced = add(replaced, done.replaced);
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
