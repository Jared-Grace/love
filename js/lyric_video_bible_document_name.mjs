import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_bible_document_name(
  version,
  book_code,
  chapter_number,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "The one name that stands for a passage everywhere it is written down - the stem of its timing document, and the folder its pictures are drawn into.";
  "★ IT IS ONE NAME BECAUSE THE DOCUMENT AND THE PICTURES MUST BE FOUND BY THE SAME REASONING. The times of a passage live in a file called after it and the paintings of that passage live in a folder called after it, and those two were spelled apart - the file by a command, the folder by whoever typed a path into a document by hand. Two spellings of one name is a rename waiting to strand half of itself, and the half that gets stranded is the pictures, which are the part that costs money to make again.";
  "The book is written the way the translation writes it, in the upper case, because that is how usfm names a book and a name that agrees with its source is one fewer thing to convert.";
  "The chapter is joined as it is given rather than as a number, because a passage is not always a whole chapter - a psalm long enough to be sung in parts is addressed by the verses of the part, and a part's name has a dash in it that no number could carry.";
  arguments_assert(arguments, 3);
  let v = version + "_" + book_code + "_" + chapter_number;
  return v;
}
