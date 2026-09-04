import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { lyric_video_document_draft } from "./lyric_video_document_draft.mjs";
import { not } from "./not.mjs";
export async function lyric_video_psalms_documents_draft(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Writes a first timing document for every chapter of the Psalms there is a whole singing of on this machine and no document for yet, and says which chapters those were.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, WHICH IS WHAT STOPS IT DRIFTING FROM WHAT IS ACTUALLY THERE. Songs arrive by download a batch at a time, so a written-down list of chapters is out of date the moment somebody sings another one, and a list that has gone stale reads exactly like a list that is complete. Asking the folder means running this again after a new batch does the right thing with no editing at all.");
  ("★ A CHAPTER THAT ALREADY HAS A DOCUMENT IS LEFT ALONE, AND THAT IS THE WHOLE SAFETY OF RUNNING THIS TWICE. The times in a document are the one part of the work nobody can redo by command - somebody sat with the song and moved each line onto the beat it is sung on - and drafting over them would put an even spread back in their place. Nothing would go red; the loss would show up as a video whose words drift, which is only visible to a person watching it.");
  ("A chapter whose text or song cannot be read is set aside with what went wrong, and the rest are still written. One missing translation of one psalm is no reason for the other twenty to go untimed, and stopping at the first would hide how many were actually reachable.");
  ("The folder is asked for with an empty name on the end because the folder itself is what is wanted rather than a file in it, and there is one place in this repo that knows where songs land.");
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_chapters(folder_audio);
  let book_code = "PSA";
  let drafted = [];
  let kept = [];
  let refused = [];
  for (let song of songs) {
    let path_document = lyric_video_bible_document_path(
      version,
      book_code,
      song.chapter,
    );
    let already = await file_exists(path_document);
    if (already) {
      kept.push(song.chapter);
      continue;
    }
    try {
      await lyric_video_document_draft(
        version,
        book_code,
        song.chapter,
        song.path_audio,
        path_document,
      );
      drafted.push(song.chapter);
    } catch (e) {
      refused.push({
        chapter: song.chapter,
        went_wrong: e.message,
      });
    }
  }
  let undocumented = [];
  for (let song of songs) {
    let path_document = lyric_video_bible_document_path(
      version,
      book_code,
      song.chapter,
    );
    let there = await file_exists(path_document);
    if (not(there)) {
      undocumented.push(song.chapter);
    }
  }
  let r = {
    songs: songs.length,
    drafted,
    kept,
    refused,
    undocumented,
  };
  return r;
}
