import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { lyric_video_passage_recording_document_path } from "./lyric_video_passage_recording_document_path.mjs";
import { lyric_video_recording_passage_text } from "./lyric_video_recording_passage_text.mjs";
import { lyric_video_song_recording_named } from "./lyric_video_song_recording_named.mjs";
export async function lyric_timing_song_found(version, file_name) {
  arguments_assert(arguments, 2);
  ("$plain version");
  ("$plain file_name");
  ("Which recording a song of this name in the downloads folder actually is - the passage it sings, the mark that tells it from the other singings of those words, and where its timing document lives.");
  ("★ THE SONG THE PERSON IS LISTENING TO IS WHAT SAYS WHICH DOCUMENT THEY ARE TIMING, AND NOTHING ELSE CAN SAY IT. The tapping screen used to work that out from a chapter number pressed in a row at the top, which knows nothing about takes and nothing about stanzas: whatever was playing, it opened and wrote the plain whole chapter. So tapping along to the second arrangement of a psalm overwrote the first one's times with no warning at all, and the hundred and fifty six documents belonging to takes and to parts could not be opened from that screen at any time. A person choosing a file has already answered the question; this is only asking them what they answered.");
  ("★ THE MARK IS READ OFF THE WHOLE FOLDER RATHER THAN OFF THE NAME, because the numbering in these file names was put there by the downloader and numbers the compressed copies and the lossless copies as two separate runs. Two files numbered alike can be two different arrangements and two files numbered differently can be one. Only a walk that has every recording of a passage in front of it can say which is which, and both walks already do that, so both are asked and neither judgment is made twice.");
  ("Whole chapters and parts of chapters are both walked, because between them they are every psalm song in the folder, and a screen that asked only the first would be unable to open a stanza of Psalm 119 at all. A whole chapter is answered with empty ends, which is how the address and the label already say that nothing narrows the passage.");
  ("A file the walks do not recognise is reported as not found rather than guessed at. It may be a song of another book, or a recording named in a way the readers do not know, and either way the honest answer leaves the person free to say which passage it is by hand - where a guess would hand them a document addressed to words the song does not sing.");
  let folder_audio = folder_user_downloads_path("");
  let path_audio = folder_user_downloads_path(file_name);
  let chapters = await psalms_songs_folder_chapters(folder_audio);
  let parts = await psalms_songs_folder_parts(folder_audio);
  let rows = [];
  for (let song of chapters) {
    list_add(rows, {
      chapter_number: song.chapter,
      verse_first: "",
      verse_last: "",
      mark: song.mark,
      path_audio: song.path_audio,
    });
  }
  for (let song of parts) {
    list_add(rows, {
      chapter_number: song.chapter,
      verse_first: song.verse_first,
      verse_last: song.verse_last,
      mark: song.mark,
      path_audio: song.path_audio,
    });
  }
  function song_named_is(candidate) {
    let same = equal(candidate.path_audio, path_audio);
    return same;
  }
  let row = list_find_or_null(rows, song_named_is);
  let missing = null_is(row);
  if (missing) {
    let unfound = {
      found: false,
      book_code: null,
      chapter_number: null,
      verse_first: null,
      verse_last: null,
      mark: null,
      passage: null,
      path_document: null,
    };
    return unfound;
  }
  let book_code = "PSA";
  let path_document = lyric_video_passage_recording_document_path(
    version,
    book_code,
    row.chapter_number,
    row.verse_first,
    row.verse_last,
    row.mark,
  );
  let said = await lyric_video_recording_passage_text(
    version,
    book_code,
    row.chapter_number,
    row.verse_first,
    row.verse_last,
  );
  let passage = lyric_video_song_recording_named(said, row.mark);
  let r = {
    found: true,
    book_code,
    chapter_number: row.chapter_number,
    verse_first: row.verse_first,
    verse_last: row.verse_last,
    mark: row.mark,
    passage,
    path_document,
  };
  return r;
}
