import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { text_digits_leading } from "./text_digits_leading.mjs";
export function lyric_video_bible_document_name_read_or_null(name) {
  "$plain name";
  "Everything a timing document's own name says about what it holds - the translation, the book, the chapter, the verses of it where the name names a part, and the mark that tells one recording of that passage from another - or nothing where the name does not say that.";
  "★ IT READS THE NAME AND NOT THE PASSAGE WRITTEN INSIDE THE DOCUMENT, THOUGH THE FIELD INSIDE LOOKS EASIER. That field says `Psalm 147:12-20`, which is the line printed across the video for somebody to read, and user-facing words are changed for the sake of the reader - a dash becomes a long dash, a space is added, a translation spells its own reference its own way. The name is an address: it is built by one function so that asking for the same passage twice reaches the same file, and nothing is free to respell it. So the readable thing is the fragile one, and the address is what can be read back.";
  "★ A FIELD THAT BEGINS WITH A DIGIT BELONGS TO THE PASSAGE AND ANYTHING ELSE IS THE MARK, WHICH IS THE SAME TEST THE REST OF THIS REPO ALREADY MAKES. The names on the disk are `bsb_PSA_147`, `bsb_PSA_147_12-20`, `bsb_PSA_150_wav` and `bsb_PSA_147_12-20_take1`, and nothing in the count of fields tells those apart - a fourth field is the verses in one and the mark in another. Opening with a digit is what separates them, and it is the test the song-name reading uses to tell a verse range from the name of a stanza, and the test the given-away passage code uses to tell a part from a whole chapter. A third place stating it is a third place to drift, so the leading digits are asked for rather than matched here.";
  "★ THE MARK IS WHATEVER IS LEFT, JOINED BACK UP, BECAUSE A MARK IS ALREADY SPELLED WITH THE SAME SEPARATOR. One document on this disk is marked `take1_mp3`, so a mark is not always one field; reading only the next field would hand back `take1` and lose the rest, and the name rebuilt from that answer would be the address of a different file. Taking everything left means the answer cannot be shorter than what was read.";
  "The two ends and the mark come back as empty text rather than as nothing, because that is how the function that builds this address says `the whole chapter` and `the plain recording`, and a caller holding this answer can hand it straight back without turning one spelling of absent into another.";
  "The chapter comes back as a number because every caller wants to count with it - pad it into a chapter code, group the boxes of a giveaway, print which psalm this is - while the verse ends come back as written, letters and all, because a half verse is written `13a` and that is not a quantity.";
  "A name this cannot read comes back as nothing rather than stopping, because the folder it reads is walked whole and a folder is allowed to hold a file nobody named by this rule. Nothing in a reading can report its own silence, so whoever walks the folder has to count what was passed over.";
  let words = name.split("_");
  if (less_than(words.length, 3)) {
    return null;
  }
  let version = words[0];
  let book_code = words[1];
  let chapter_word = words[2];
  let chapter_digits = text_digits_leading(chapter_word);
  if (not_equal(chapter_digits, chapter_word)) {
    return null;
  }
  let rest = words.slice(3);
  let verse_first = "";
  let verse_last = "";
  let rest_mark = rest;
  let part_word = rest[0];
  let part_digits = part_word ? text_digits_leading(part_word) : null;
  if (part_digits) {
    let ends = part_word.split("-");
    if (not_equal(ends.length, 2)) {
      return null;
    }
    let b = text_digits_leading(ends[1]);
    if (not(b)) {
      return null;
    }
    verse_first = ends[0];
    verse_last = ends[1];
    rest_mark = rest.slice(1);
  }
  let read = {
    version: version,
    book_code: book_code,
    chapter_number: Number(chapter_digits),
    verse_first: verse_first,
    verse_last: verse_last,
    mark: rest_mark.join("_"),
  };
  return read;
}
