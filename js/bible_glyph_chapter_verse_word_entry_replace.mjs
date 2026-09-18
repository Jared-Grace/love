import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { js_text_literal } from "./js_text_literal.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { add } from "./add.mjs";
import { bible_glyph_chapter_line_entry_replace } from "./bible_glyph_chapter_line_entry_replace.mjs";
import { equal_not } from "./equal_not.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_verse_word_entry_replace(
  chapter_code,
  verse_number,
  word,
  entry,
) {
  "Rewrites every entry of ONE VERSE of a written picture Bible chapter that is exactly one given word, replacing it with a given entry.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and write back, and nothing that runs.";
  "$plain verse_number";
  "the number of the verse within that chapter, counted from one. It is compared against the numbers the file carries and nothing about it runs.";
  "$plain word";
  "the word is the English the verse currently spells out, given exactly as the verse spells it, capital letter and trailing punctuation and all. It names text to find and nothing that runs.";
  "$plain entry";
  "the entry is the shorthand to write in that word's place, given as the chapter spells shorthand and without the quotes around it. It is written down as text and nothing about it runs.";
  "A VERSE IS THE RIGHT SIZE FOR MARKING A NAME AND A CHAPTER IS NOT, which is the whole reason this exists beside the chapter-wide writer. The name reading works verse by verse: it knows the original of the ninth verse has Esau in it and says nothing about the eleventh. A chapter-wide writer can only be told the word, so it has to be held back whenever the English spells a name more often than the original does - and in Genesis twenty seven that held back Isaac, Esau, Rebekah and Jacob, which is to say almost the chapter. Asked one verse at a time the question has an answer every time and nothing needs holding back.";
  "IT MARKS EVERY STANDING OF THE WORD IN THAT VERSE RATHER THAN A CHOSEN ONE, because within a single verse they cannot disagree. The reading matches on the spelling and not on the position, so if a verse's original carries the name at all then every English word of that spelling in that verse was named. Counting which occurrence is meant would be precision about a distinction that is not there, and an index that shifts under its own replacements.";
  "THE VERSE ENDS WHERE ITS OBJECT ENDS AND NOT WHERE ITS LIST ENDS. Reading forward to the line that closes the word list works only while the list is written one entry per line; a short verse keeps its whole list on the line that opens it, so there is no closing line to find and the walk would run on into the next verse and mark words there. Stopping at the close of the verse itself is true of both shapes.";
  arguments_assert(arguments, 4);
  let lower = text_lower_to(chapter_code);
  let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
  let before = await file_read(f_path);
  let lines = text_split_newline(before);
  let bare = js_text_literal(word);
  let entry_bare = js_text_literal(entry);
  let b = String(verse_number);
  let opener = text_combine_3("verse_number: ", b, ",");
  function lambda(line) {
    let left = text_trim(line);
    let eq = equal(left, opener);
    return eq;
  }
  let start = lines.findIndex(lambda);
  if (less_than(start, 0)) {
    error({
      hint: "no verse with this number was found in the chapter",
      f_path,
      verse_number,
    });
  }
  let replaced = 0;
  let index = add(start, 1);
  while (less_than(index, lines.length)) {
    let line = lines[index];
    let trimmed = text_trim(line);
    let closed = equal(trimmed, "},");
    if (closed) {
      break;
    }
    let done = bible_glyph_chapter_line_entry_replace(line, bare, entry_bare);
    lines[index] = done.line;
    replaced = add(replaced, done.replaced);
    index = add(index, 1);
  }
  let found = equal_not(replaced, 0);
  assert_json(found, {
    f_path,
    verse_number,
    word,
    hint: "no entry of that verse is exactly that word, so nothing was redrawn - check the spelling, the capital letter and the trailing punctuation against the verse itself",
  });
  let contents = list_join_newline(lines);
  await file_overwrite(f_path, contents);
  let r = {
    f_path,
    chapter_code,
    verse_number,
    word,
    entry,
    replaced,
  };
  return r;
}
