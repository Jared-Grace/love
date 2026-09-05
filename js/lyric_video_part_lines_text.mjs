import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_chapter_verses_text } from "./bible_usfm_version_chapter_verses_text.mjs";
import { null_is } from "./null_is.mjs";
import { lyric_video_passage_lines_text } from "./lyric_video_passage_lines_text.mjs";
export async function lyric_video_part_lines_text(
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
  ("The lines of part of one chapter as a lyric video shows them, for a song that sings a stanza or a half of a psalm rather than the whole of it.");
  ("★ A PART IS SHOWN BY THE SAME RULE AS A WHOLE CHAPTER, AND ONLY THE READING DIFFERS. Where the lines break and which rows are dropped are answered once, elsewhere; all this adds is which verses to read. That is what stops a stanza song being laid out even slightly differently from the chapter song sitting next to it.");
  ("It refuses rather than guesses when the verses cannot be found in the printing. A range that names a piece of a verse the translation never split, or an end that comes before its start, is a passage nobody sang; a guess would draft a document over the wrong words and the times would be corrected onto them by hand before anyone noticed.");
  let text = await bible_usfm_version_chapter_verses_text(
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
  );
  if (null_is(text)) {
    return null;
  }
  let texts = lyric_video_passage_lines_text(text);
  return texts;
}
