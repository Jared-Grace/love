import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { js_text_literal } from "./js_text_literal.mjs";
import { equal } from "./equal.mjs";
import { text_trim } from "./text_trim.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { add } from "./add.mjs";
import { bible_glyph_chapter_line_entry_replace } from "./bible_glyph_chapter_line_entry_replace.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_verse_word_nth_entry_replace(
  chapter_code,
  verse_number,
  word,
  nth,
  entry,
) {
  "Rewrites ONE chosen standing of a word in ONE VERSE of a written picture Bible chapter - the nth, counted from one - replacing it with a given entry.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and write back, and nothing that runs.";
  "$plain verse_number";
  "the number of the verse within that chapter, counted from one. It is compared against the numbers the file carries and nothing about it runs.";
  "$plain word";
  "the entry the verse currently spells, exactly, without the quotes around it. It names text to find and nothing that runs.";
  "$plain nth";
  "which standing of that entry in the verse to rewrite, counted from one in reading order. It is a count and nothing about it runs.";
  "$plain entry";
  "the entry to write in its place, as the chapter spells shorthand and without the quotes. It is written down as text and nothing about it runs.";
  "THE VERSE-WIDE WRITER BESIDE THIS ONE REWRITES EVERY STANDING ON PURPOSE, and its prose says why: a name reading matches spelling and not position, so within a verse the standings cannot disagree. That holds for the reading and fails for an undo. On 2026-10-05 a name run drew the English He, So and LORD as pictures wherever the interlinear glossed a name with those letters, and the verses it touched already held the same picture where the original truly has the name. Taking the wrong one back means telling two identical pictures apart, and only their order does that. Rejected: re-reading each verse from the original to decide again, which is the reading that went wrong; and taking the whole run back with git, which would also take back the hand corrections made on top of it.";
  "IT REFUSES WHEN THE VERSE HAS FEWER STANDINGS THAN ASKED, so a count that has drifted under a later edit fails aloud rather than rewriting a neighbour. A verse kept on one line is refused too, since one line holds every standing and its position cannot be chosen without parsing the line.";
  arguments_assert(arguments, 5);
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
  let wanted = Number(nth);
  let seen = 0;
  let replaced = 0;
  let index = add(start, 1);
  while (less_than(index, lines.length)) {
    let line = lines[index];
    let trimmed = text_trim(line);
    if (equal(trimmed, "},")) {
      break;
    }
    let done = bible_glyph_chapter_line_entry_replace(line, bare, entry_bare);
    if (less_than(1, done.replaced)) {
      error({
        hint: "this verse is kept on one line, so one standing cannot be chosen",
        f_path,
        verse_number,
      });
    }
    if (equal(done.replaced, 1)) {
      seen = add(seen, 1);
      if (equal(seen, wanted)) {
        lines[index] = done.line;
        replaced = 1;
      }
    }
    index = add(index, 1);
  }
  let b2 = equal(replaced, 1);
  assert_json(b2, {
    f_path,
    verse_number,
    word,
    nth,
    seen,
    hint: "the verse does not have that many standings of the entry, so nothing was rewritten",
  });
  let contents = list_join_newline(lines);
  await file_overwrite(f_path, contents);
  let r = {
    f_path,
    chapter_code,
    verse_number,
    word,
    nth,
    entry,
    replaced,
  };
  return r;
}
