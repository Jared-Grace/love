import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_verse_word_remove(
  chapter_code,
  verse_number,
  word,
  occurrence,
) {
  "Takes one word entry out of one verse of one written picture Bible chapter, named by the verse, the entry as it is spelled, and which occurrence of it within that verse.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and nothing that runs.";
  "$plain word";
  "the entry exactly as the verse spells it, mark sign and trailing punctuation included. It names text to find and nothing that runs.";
  "A DOUBLED NEGATION IS CLEARED BY TAKING A WORD OUT AND BY NOTHING ELSE. English says none of you may eat and the original says every soul of you shall not eat, so the sentence carries the negation twice - once in the quantifier a reader sees and once in the mark drawn over the particle. Writing either one differently leaves both negations standing; only removing one of them leaves the verse saying what it says.";
  "IT IS THE SIBLING OF THE ENTRY WRITER AND SHARES ITS SCOPE for the same reason: a verse can spell the same word three times and only one of the three be the one too many, so a chapter-wide edit is the wrong size of tool and would quietly take out two correct words beside the faulty one.";
  "IT REFUSES AN OCCURRENCE IT DID NOT FIND, because a misspelt entry would otherwise write the file back unchanged and report a removal that never happened.";
  arguments_assert(arguments, 4);
  let lower = text_lower_to(chapter_code);
  let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
  let before = await file_read(f_path);
  let lines = text_split_newline(before);
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
  let bare = '"' + word + '"';
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
      hint: "that occurrence of the entry was not found inside the verse",
      f_path,
      verse_number,
      word,
      occurrence,
      seen,
    });
  }
  let kept = [];
  for (let at = 0; less_than(at, lines.length); at = at + 1) {
    let dropped = equal(at, found);
    if (dropped) {
      continue;
    }
    kept.push(lines[at]);
  }
  let after = list_join_newline(kept);
  await file_overwrite(f_path, after);
  let r = {
    f_path,
    verse_number,
    word,
    line: found + 1,
  };
  return r;
}
