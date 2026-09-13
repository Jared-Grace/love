import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_lines_text } from "./lyric_video_lines_text.mjs";
import { lyric_video_part_lines_text } from "./lyric_video_part_lines_text.mjs";
export async function lyric_video_recording_lines_text(
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
  ("The lines a lyric video shows for whatever a recording sings, whether that is a whole chapter or a stanza of one.");
  ("★ AN EMPTY END MEANS THE WHOLE CHAPTER, the same reading the address and the label already use, so a caller holding a recording asks one question rather than first deciding which of two readers it is talking to.");
  ("A part whose verses the printing has no such cut for comes back as nothing, because that is what the part reader answers and swallowing it here would turn a passage nobody sang into a screen full of the wrong words.");
  let whole = equal(verse_first, "");
  if (whole) {
    let texts_chapter = await lyric_video_lines_text(
      version,
      book_code,
      chapter_number,
    );
    return texts_chapter;
  }
  let texts = await lyric_video_part_lines_text(
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
  );
  return texts;
}
