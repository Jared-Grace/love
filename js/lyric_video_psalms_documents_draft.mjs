import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { lyric_video_document_draft } from "./lyric_video_document_draft.mjs";
import { lyric_video_songs_documents_draft } from "./lyric_video_songs_documents_draft.mjs";
export async function lyric_video_psalms_documents_draft(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Writes a first timing document for every whole chapter of the Psalms there is a singing of on this machine and no document for yet, and says which chapters those were.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, WHICH IS WHAT STOPS IT DRIFTING FROM WHAT IS ACTUALLY THERE. Songs arrive by download a batch at a time, so a written-down list of chapters is out of date the moment somebody sings another one, and a list that has gone stale reads exactly like a list that is complete. Asking the folder means running this again after a new batch does the right thing with no editing at all.");
  ("Leaving an already documented chapter alone, setting a refused one aside and reporting what is still undocumented are no longer decided here. A stanza song needs every one of those rules and is addressed differently, so the rules live in one place and only the addressing is written twice.");
  ("The folder is asked for with an empty name on the end because the folder itself is what is wanted rather than a file in it, and there is one place in this repo that knows where songs land.");
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_chapters(folder_audio);
  let book_code = "PSA";
  function song_named(song) {
    let name = song.chapter;
    return name;
  }
  function song_path(song) {
    let path = lyric_video_bible_document_path(
      version,
      book_code,
      song.chapter,
    );
    return path;
  }
  async function song_drafted(song, path_document) {
    let document = await lyric_video_document_draft(
      version,
      book_code,
      song.chapter,
      song.path_audio,
      path_document,
    );
    return document;
  }
  let r = await lyric_video_songs_documents_draft(
    songs,
    song_named,
    song_path,
    song_drafted,
  );
  return r;
}
