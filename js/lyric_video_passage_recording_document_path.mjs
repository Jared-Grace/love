import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
export function lyric_video_passage_recording_document_path(
  version,
  book_code,
  chapter_number,
  verse_first,
  verse_last,
  mark,
) {
  arguments_assert(arguments, 6);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_first");
  ("$plain verse_last");
  ("$plain mark");
  ("Where the timing document of one particular singing lives, given everything that tells that singing apart from every other: the translation, the passage, and the short mark that separates two recordings of the same words.");
  ("★ IT IS THE ONE PLACE THE WHOLE ADDRESS IS PUT TOGETHER, AND THAT IS WHAT LETS A SCREEN AND A WALK REACH THE SAME FILE. Three pieces already existed - the chapter's address, the part's address, and the mark's suffix - and every caller that wanted a recording's document joined them up itself. The tapping screen joined up only the first, so it opened and saved the plain whole chapter whatever song was playing: a hundred and fifty six of the hundred and ninety four documents on the disk could not be reached from it at all, and tapping along to a take wrote over the plain recording's times without saying so.");
  ("★ AN EMPTY END MEANS THE WHOLE CHAPTER, THE SAME WAY AN EMPTY MARK MEANS THE PLAIN RECORDING. Those two are the same kind of fact - nothing narrows this - so they are said the same way, and a caller holding a recording can hand over what it has without first working out which of two functions to call. That decision is the whole of what is asked here.");
  ("The ends are passed on exactly as they arrived, letters and all, because a song that stops in the middle of a verse is addressed by the printing's own half verse and rounding it would name a passage nobody sang.");
  let whole = equal(verse_first, "");
  if (whole) {
    let path_chapter = lyric_video_bible_document_path(
      version,
      book_code,
      chapter_number,
    );
    let path_whole = lyric_video_recording_document_path(path_chapter, mark);
    return path_whole;
  }
  let path_passage = lyric_video_bible_part_document_path(
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
  );
  let path = lyric_video_recording_document_path(path_passage, mark);
  return path;
}
