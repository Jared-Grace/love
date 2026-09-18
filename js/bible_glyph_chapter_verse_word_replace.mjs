import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { js_text_literal } from "./js_text_literal.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_verse_word_replace(
  chapter_code,
  verse_number,
  from,
  occurrence,
  to,
) {
  "Changes one word entry inside one verse of one written picture Bible chapter, named by the verse, the entry as it is spelled, and which occurrence of it within that verse.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and nothing that runs.";
  "$plain from";
  "the entry exactly as the verse spells it, mark sign and trailing punctuation included. It names text to find and nothing that runs.";
  "$plain to";
  "the entry to write in its place, plain English or a mark. It names text to write and nothing that runs.";
  "AN OVERDRAWN VERSE IS FIXED ONE ENTRY AT A TIME, NOT ONE WORD PER CHAPTER. The word mark writer redraws a word everywhere it stands in a chapter, which is right when a root has just been seated and wrong when one verse drew a mark on a word its row does not seat - the same mark two verses away may be seated correctly. So this is scoped to one verse, and to one occurrence inside it, because a verse can draw the same mark three times and only one of the three be unseated.";
  "IT REFUSES AN OCCURRENCE IT DID NOT FIND, for the same reason the word mark writer refuses a word it did not find: a misspelt entry would otherwise write the file back unchanged and report success.";
  "AN ENTRY IS SPELLED BY THE SPELLER RATHER THAN BY PUTTING QUOTES ON IT, because a word can carry a quotation mark of its own. A word closing a line of speech keeps the closing mark, and the formatter then writes that entry in single quotes since that is the spelling needing no escape - so a double quote on each end looks for a line that is not in the file and the refusal above fires on a word the verse plainly has.";
  "THE VERSE ENDS WHERE ITS OBJECT ENDS AND NOT WHERE ITS WORD LIST ENDS. Reading forward to the line that closes the list works only while the list is written one entry per line; a short verse keeps its whole list on the line that opens it, so there is no closing line to find and the walk would run on into the next verse and change a word there instead. Stopping at the close of the verse itself is true of both shapes. A short verse's entries are still out of reach here - what this fixes is reaching into the wrong verse, not failing to reach into this one.";
  arguments_assert(arguments, 5);
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
  let bare = js_text_literal(from);
  let seen = 0;
  let index = start + 1;
  let found = -1;
  while (less_than(index, lines.length)) {
    let trimmed = text_trim(lines[index]);
    if (equal(trimmed, "},")) {
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
      from,
      occurrence,
      seen,
    });
  }
  let found_line = lines[found];
  let literal = js_text_literal(to);
  lines[found] = text_replace_once(found_line, bare, literal);
  let after = list_join_newline(lines);
  await file_overwrite(f_path, after);
  let r = {
    f_path,
    verse_number,
    from,
    to,
    line: found + 1,
  };
  return r;
}
