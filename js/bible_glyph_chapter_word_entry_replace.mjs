import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { js_text_literal } from "./js_text_literal.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split } from "./text_split.mjs";
import { subtract } from "./subtract.mjs";
import { list_join } from "./list_join.mjs";
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
  "A SHORT VERSE KEEPS ITS WHOLE LIST ON ONE LINE and used to be invisible here, which is the fault this second branch exists to close. The formatter writes one entry per line only when the list is too long to fit on one, so a hundred and twenty one of the ten thousand six hundred and ninety verses in these chapters carry every entry they have on a single line. A search for a line that is exactly one entry walks straight past all of them. The name badge pass found it: John three names Nicodemus twice, one standing on its own line and one in a short verse, and the writer reported one replacement where two were asked for.";
  "THE QUOTATION MARKS ROUND AN ENTRY ARE ASKED FOR RATHER THAN TYPED, because a word can carry one of its own. A word that closes a line of speech keeps the closing quotation mark - Genesis twenty seven carries Esau with one - and the formatter then writes that entry in single quotes, since that is the spelling needing no escape. Putting a double quote on each end looks for a line that is not in the file, and the refusal above then reports the word missing from a chapter that names it twenty times. The speller next door knows the formatter's rule, so both halves are spelled by it.";
  "THE SECOND BRANCH IS STILL NOT A PLAIN TEXT REPLACEMENT, and the quotes are what keep it honest. What is looked for is the word wearing its own quotation marks, so a longer entry that merely begins with these letters cannot match - the character after the letters would have to be a quote and it is not. The line has to open a verse's list as well, which is what keeps the prose above the verses out of reach: prose is one long string and never spells a quoted word inside itself.";
  arguments_assert(arguments, 3);
  let lower = text_lower_to(chapter_code);
  let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
  let before = await file_read(f_path);
  let lines = text_split_newline(before);
  let bare = js_text_literal(word);
  let with_comma = text_combine(bare, ",");
  let entry_bare = js_text_literal(entry);
  let entry_comma = text_combine(entry_bare, ",");
  let written = [];
  let replaced = 0;
  for (let line of lines) {
    let trimmed = text_trim(line);
    let is_comma = equal(trimmed, with_comma);
    let is_bare = equal(trimmed, bare);
    let hit = or(is_comma, is_bare);
    if (hit) {
      let indent = text_replace_once(line, trimmed, "");
      let mark = entry_bare;
      if (is_comma) {
        mark = entry_comma;
      }
      let item = text_combine(indent, mark);
      list_add(written, item);
      replaced = add(replaced, 1);
      continue;
    }
    let short_verse = text_starts_with(trimmed, "words: [");
    if (not(short_verse)) {
      list_add(written, line);
      continue;
    }
    let inside = text_includes(line, bare);
    if (not(inside)) {
      list_add(written, line);
      continue;
    }
    let parts = text_split(line, bare);
    let count = subtract(parts.length, 1);
    let rewritten = list_join(parts, entry_bare);
    list_add(written, rewritten);
    replaced = add(replaced, count);
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
