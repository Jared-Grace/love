import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_passage_recording_document_path } from "./lyric_video_passage_recording_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_recording_passage_text } from "./lyric_video_recording_passage_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { song_identity } from "./song_identity.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_timing_save(
  { version, book_code, chapter_number, verse_first, verse_last, mark },
  duration,
  lines,
  file_name,
) {
  arguments_assert(arguments, 4);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_first");
  ("$plain verse_last");
  ("$plain mark");
  ("$plain duration");
  ("$plain lines");
  ("$plain file_name");
  ("Writes the moments somebody has just tapped into the timing document of the recording they were tapping along to, keeping everything else that document already held.");
  ("★ IT IS THE RECORDING THAT IS WRITTEN TO, NOT THE CHAPTER, AND GETTING THAT WRONG COST SOMEBODY THEIR TIMES SILENTLY. A chapter said on its own addresses the plain whole-chapter document, so an evening spent tapping along to the second arrangement of a psalm landed on the first arrangement's document and overwrote numbers that had been correct. Which song was playing was recorded inside the file as a note while the file itself was chosen without reference to it - the one place the answer was known was the one place it was not used. The verses and the mark now come in with the passage and decide the address, so the file written is the file the song belongs to.");
  ("WHAT IS ALREADY IN THE DOCUMENT IS KEPT AND ONLY THE HEARD PART REPLACED. The sizes of the letters on screen, the pictures a passage has been given, and anything else somebody has set there are not facts about this sitting, and a save that wrote a fresh document would quietly undo all of them every time a line was corrected.");
  ("A document that does not exist yet is started from the sizes alone, because those are the only part a new passage cannot do without.");
  ("THE SONG IS IDENTIFIED RATHER THAN JUST NAMED. Two files in a downloads folder can carry one name at different times, so a name on its own cannot say which recording the numbers were measured against; its size and its fingerprint can, and they are cheap to take at the moment the file is certainly the one that was playing.");
  let path_document = lyric_video_passage_recording_document_path(
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
    mark,
  );
  let existing = await file_exists(path_document);
  let sizes = {
    width: 1080,
    height: 1920,
    font_size: 150,
    passage_font_size: 96,
    credit_font_size: 64,
  };
  let document_timed = existing ? await file_read_json(path_document) : sizes;
  let passage = await lyric_video_recording_passage_text(
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
  );
  let credit = bible_usfm_version_credit_text(version);
  let song = await song_identity(file_name);
  let heard = {
    passage,
    credit,
    duration,
    lines,
    song,
  };
  object_merge_replace(document_timed, heard);
  await file_overwrite_json(path_document, document_timed);
  let r = {
    path_document,
    lines: lines.length,
  };
  return r;
}
