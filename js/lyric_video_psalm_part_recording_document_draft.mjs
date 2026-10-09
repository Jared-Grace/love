import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { lyric_video_part_document_draft } from "./lyric_video_part_document_draft.mjs";
export async function lyric_video_psalm_part_recording_document_draft(
  version,
  chapter,
  verse_first,
  verse_last,
  mark,
  path_audio,
) {
  "Writes a first timing document for one singing of one part of a psalm, from a recording named by its path rather than found in the download folder.";
  "★ THE FOLDER READERS REFUSE AN EDITED SESSION RECORDING ON PURPOSE, SO A SONG THAT EXISTS ONLY AS ONE HAS NO OTHER WAY IN. Psalm 149:6-9's second singing exists only as the session file it was edited in, and nothing under that name collides with a download, so the refusal guarding the folder walk has nothing to guard here; the mark is said by the person who knows which take it is.";
  arguments_assert(arguments, 6);
  let book_code = "PSA";
  let path_passage = lyric_video_bible_part_document_path(
    version,
    book_code,
    chapter,
    verse_first,
    verse_last,
  );
  let path_document = lyric_video_recording_document_path(path_passage, mark);
  await lyric_video_part_document_draft(
    {
      version,
      book_code,
      chapter_number: chapter,
      verse_first,
      verse_last,
    },
    path_audio,
    path_document,
  );
  let r = {
    path_document,
  };
  return r;
}
