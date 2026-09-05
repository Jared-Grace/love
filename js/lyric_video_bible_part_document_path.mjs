import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
export function lyric_video_bible_part_document_path(
  version,
  book_code,
  chapter_number,
  verse_first,
  verse_last,
) {
  arguments_assert(arguments, 5);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_first");
  ("$plain verse_last");
  ("Where the timing document of part of one chapter in one translation is kept.");
  ("★ IT IS THE WHOLE CHAPTER'S ADDRESS WITH THE VERSES PUT IN BEFORE THE ENDING, AND ASKING THE OTHER ONE IS WHAT KEEPS THE TWO IN STEP. The two addresses have to agree about the translation, the book, the folder and the ending, and there is no way to keep two spellings of that agreeing except to have only one. So this does not spell an address at all; it asks for the chapter's address and grows it, and a change to how a passage is named reaches both without either being edited.");
  ("★ THE VERSES ARE ALWAYS JOINED WITH A DASH, WHICH IS WHAT MAKES THE SAME PASSAGE REACH THE SAME FILE. The songs spell a range both ways - Psalm_147_1-11.wav beside Psalm 147_1_11.mp3, one passage sung once - so an address that copied the file name would put one singing in two documents and the second would be drafted as an even spread over times somebody had already corrected. Choosing one mark here means the two names arrive at one place, which is the whole reason an address is worked out rather than chosen.");
  ("The underscore before the verses is the same separator the rest of the name already uses between the things that say which passage this is, and the dash inside is a different mark on purpose: it is what tells a reader of the folder that the last part is one field naming two ends rather than two more fields.");
  let whole = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let stem = text_without_ending(whole, ".json");
  let path = stem + "_" + verse_first + "-" + verse_last + ".json";
  return path;
}
