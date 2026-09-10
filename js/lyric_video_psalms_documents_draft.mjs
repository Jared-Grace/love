import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { lyric_video_song_recording_named } from "./lyric_video_song_recording_named.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { lyric_video_document_draft } from "./lyric_video_document_draft.mjs";
import { lyric_video_songs_documents_draft } from "./lyric_video_songs_documents_draft.mjs";
export async function lyric_video_psalms_documents_draft(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Writes a first timing document for every singing of a whole chapter of the Psalms on this machine that has no document for it yet, and says which those were.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, WHICH IS WHAT STOPS IT DRIFTING FROM WHAT IS ACTUALLY THERE. Songs arrive by download a batch at a time, so a written-down list of chapters is out of date the moment somebody sings another one, and a list that has gone stale reads exactly like a list that is complete. Asking the folder means running this again after a new batch does the right thing with no editing at all.");
  ("★ EACH SINGING IS DRAFTED SEPARATELY, BECAUSE THE TIMES OF ONE ARRANGEMENT FIT NO OTHER. The renditions of a chapter differ in length, some of them by a third, so a line that lands at forty seconds in one lands nowhere near it in another; one document shared between them would be right for whichever was drafted first and wrong for the rest. Where the second and later singings are written comes from the mark the walk works out for each recording, so the plain singing keeps the address it already had and nobody's corrected times are stranded under a name nothing reads.");
  ("Leaving an already documented singing alone, setting a refused one aside and reporting what is still undocumented are no longer decided here. A stanza song needs every one of those rules and is addressed differently, so the rules live in one place and only the addressing is written twice.");
  ("The folder is asked for with an empty name on the end because the folder itself is what is wanted rather than a file in it, and there is one place in this repo that knows where songs land.");
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_chapters(folder_audio);
  let book_code = "PSA";
  function song_named(song) {
    let passage = String(song.chapter);
    let name = lyric_video_song_recording_named(passage, song.mark);
    return name;
  }
  function song_path(song) {
    let path_passage = lyric_video_bible_document_path(
      version,
      book_code,
      song.chapter,
    );
    let path = lyric_video_recording_document_path(path_passage, song.mark);
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
