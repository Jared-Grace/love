import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_verse_word_insert(
  chapter_code,
  verse_number,
  before,
  occurrence,
  word,
) {
  "Puts one more word entry into one verse of one written picture Bible chapter, immediately in front of a named occurrence of an entry already there.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and nothing that runs.";
  "$plain before";
  "the entry the new one goes in front of, exactly as the verse spells it. It names text to find and nothing that runs.";
  "$plain word";
  "the entry to put in, plain English or a mark. It names text to write and nothing that runs.";
  "A DRAFTED VERSE CAN ARRIVE WITH ENGLISH MISSING, and that is a different fault from a picture drawn wrongly. Numbers thirty says her husband hears of it and says nothing to her and does not prohibit her, and the draft stored it with the and and the does gone, so the sentence a reader meets is not the sentence the translation has. Nothing in this collection could put a word back - every editing atom here changed a word already standing or took one away - so a verse missing a word had to be left broken or rewritten whole.";
  "IT NAMES THE PLACE BY A NEIGHBOUR RATHER THAN BY A NUMBER, because a word's position in a verse changes the moment anything before it is drawn, removed or split, and a number written down in one run is stale by the next. The neighbour is content, so it still names the same place after the verse around it has moved.";
  "IT REFUSES A NEIGHBOUR IT DID NOT FIND, because a misspelt one would otherwise write the file back unchanged and report a word that was never put in.";
  arguments_assert(arguments, 5);
  let lower = text_lower_to(chapter_code);
  let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
  let source = await file_read(f_path);
  let lines = text_split_newline(source);
  let opener = "verse_number: " + verse_number + ",";
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
  let bare = '"' + before + '"';
  let seen = 0;
  let index = start + 1;
  let found = -1;
  while (less_than(index, lines.length)) {
    let trimmed = text_trim(lines[index]);
    if (equal(trimmed, "],")) {
      break;
    }
    if (equal(trimmed, bare) || equal(trimmed, bare + ",")) {
      seen = seen + 1;
      let left2 = String(seen);
      let right = String(occurrence);
      if (equal(left2, right)) {
        found = index;
        break;
      }
    }
    index = index + 1;
  }
  if (less_than(found, 0)) {
    error({
      hint: "that occurrence of the neighbour was not found inside the verse",
      f_path,
      verse_number,
      before,
      occurrence,
      seen,
    });
  }
  let neighbour = lines[found];
  let v = neighbour.indexOf('"');
  let indent = neighbour.slice(0, v);
  let json = json_to(word);
  let written = indent + json + ",";
  let kept = [];
  for (let at = 0; less_than(at, lines.length); at = at + 1) {
    let here = equal(at, found);
    if (here) {
      kept.push(written);
    }
    kept.push(lines[at]);
  }
  let after = list_join_newline(kept);
  await file_overwrite(f_path, after);
  let r = {
    f_path,
    verse_number,
    before,
    word,
    line: found + 1,
  };
  return r;
}
