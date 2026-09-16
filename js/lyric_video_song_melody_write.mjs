import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_song_document_times_write } from "./lyric_video_song_document_times_write.mjs";
import { lyric_video_document_words_write } from "./lyric_video_document_words_write.mjs";
import { lyric_video_document_notes_snap_write } from "./lyric_video_document_notes_snap_write.mjs";
import { path_basename } from "./path_basename.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { lyric_video_document_write } from "./lyric_video_document_write.mjs";
export async function lyric_video_song_melody_write(
  path_audio,
  path_document,
  path_output,
) {
  "$plain path_audio";
  "$plain path_document";
  "$plain path_output";
  "Makes a song's lyric video from its recording and its drafted document in one go: hears where each line and each word is sung, moves every word onto the note of the melody it is sung on, and renders the video with the word being sung lit red.";
  "★ THE DOCUMENT HAS TO SAY WHICH ARDOUR SESSION AND WHICH TRACKS CARRY THE MELODY BEFORE THIS IS RUN, as ardour: { session, tracks }. That is the one thing about a song only the person who made it knows, and everything else here is heard or read.";
  "★ EACH STEP WRITES THE DOCUMENT BEFORE THE NEXT READS IT, so a run that fails partway leaves every step before it done and readable, and the failing step can be run on its own once whatever it refused is fixed.";
  "★ THE LINES ARE HEARD AGAIN EVERY TIME, WHICH REPLACES ANY LINE A PERSON HAS MOVED BY HAND. This is the whole song from nothing; a song already timed that only needs its words or its video again is served by running just those steps.";
  "The subtitle file is kept in the ignored folder under the document's own name, the same place the psalms' render keeps theirs, so the timing stays readable after the video is made.";
  arguments_assert(arguments, 3);
  let lines = await lyric_video_song_document_times_write(
    path_audio,
    path_document,
  );
  let words = await lyric_video_document_words_write(path_audio, path_document);
  let placed = await lyric_video_document_notes_snap_write(path_document);
  let name_document = await path_basename(path_document);
  let stem = text_without_ending(name_document, ".json");
  let path_subtitles = folder_gitignore_join(stem + ".ass");
  let video = await lyric_video_document_write(
    path_audio,
    path_document,
    path_subtitles,
    path_output,
  );
  let r = {
    path_output,
    lines_flagged: lines.flagged,
    words_confidence: words.confidence,
    shift_middle: placed.shift_middle,
    shifts_over_fifth_second: placed.shifts_over_fifth_second,
    pictures_missing: video.pictures_missing,
  };
  return r;
}
