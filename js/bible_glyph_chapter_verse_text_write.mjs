import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_verse_text_write(
  chapter_code,
  verse_number,
  text,
) {
  "Writes one whole verse of one written picture Bible chapter, handed the verse as a single line of text with its marks in it.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and nothing that runs.";
  "$plain text";
  "the verse as one line, its words separated by single spaces and its marks written with their sign. It is text to store and nothing that runs.";
  "A VERSE THAT HAS TO BE REWRITTEN WHOLE CANNOT BE REACHED ONE ENTRY AT A TIME. The entry writers beside this one change a word that is there, which is the right shape for a mark drawn on the wrong word; it is the wrong shape for a verse whose whole sentence is the neighbour's, where the words that belong there are not in the file at all and every one of them has to be put in. Doing that with the entry writers is a replace and then five removes, and the commit then says five things none of which is what happened.";
  "IT TAKES THE VERSE THE WAY A PERSON READS IT, as one line, because that is the form the author is working from and the form the mistake is visible in. Splitting it into entries is bookkeeping, so it is done here rather than by whoever is calling.";
  "ONE SPACE IS ONE BOUNDARY AND THERE IS NO WAY TO SAY OTHERWISE. Almost every chapter stores one word to an entry, so splitting on the space is exactly faithful; the eleventh of Leviticus is the exception and stores whole phrases, and a verse of that chapter rewritten through here would come back one word to an entry. That changes nothing a reader sees, because the entries are joined by a space again when the verse is drawn.";
  "IT REFUSES AN EMPTY VERSE, because a verse with no words in it is the fault this exists to repair rather than anything anybody means to write.";
  arguments_assert(arguments, 3);
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
  let closer = -1;
  let index = start + 2;
  while (less_than(index, lines.length)) {
    let trimmed = text_trim(lines[index]);
    if (equal(trimmed, "],")) {
      closer = index;
      break;
    }
    index = index + 1;
  }
  if (less_than(closer, 0)) {
    error({
      hint: "the verse's word list was never closed, so the chapter file is not shaped the way this expects",
      f_path,
      verse_number,
    });
  }
  let words = [];
  for (let piece of text_split_space(text)) {
    let word = text_trim(piece);
    let empty = equal(word, "");
    if (empty) {
      continue;
    }
    list_add(words, word);
  }
  let left2 = list_size(words);
  let none = equal(left2, 0);
  if (none) {
    error({
      hint: "the verse handed in has no words in it",
      f_path,
      verse_number,
      text,
    });
  }
  let written = [];
  for (let word of words) {
    let json = json_to(word);
    list_add(written, "          " + json + ",");
  }
  let head = lines.slice(0, start + 2);
  let tail = lines.slice(closer);
  let after = list_join_newline([...head, ...written, ...tail]);
  await file_overwrite(f_path, after);
  let r = {
    f_path,
    verse_number,
    words: list_size(words),
    text,
  };
  return r;
}
