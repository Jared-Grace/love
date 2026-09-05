import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_chapter_text } from "./bible_usfm_version_chapter_text.mjs";
import { lyric_video_passage_lines_text } from "./lyric_video_passage_lines_text.mjs";
export async function lyric_video_lines_text(
  version,
  book_code,
  chapter_number,
) {
  arguments_assert(arguments, 3);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("The lines of a whole chapter as a lyric video shows them: one line of the translation at a time, with the blank rows between stanzas dropped.");
  ("THE WORDS OF THE PASSAGE DECIDE WHERE THE LINES BREAK, and nothing here chooses. A psalm is already written in lines in the file it is kept in, and those are the lines a singer sings, so they are also the lines to show. Deciding the breaks here would be rewriting the poem to suit a screen.");
  ("How a laid-out passage becomes lines is no longer decided here. A part of a chapter is shown by the same rule, and the rule now lives in one place so the two cannot come apart.");
  let text = await bible_usfm_version_chapter_text(
    version,
    book_code,
    chapter_number,
  );
  let texts = lyric_video_passage_lines_text(text);
  return texts;
}
