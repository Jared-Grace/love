import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { lyric_video_song_recording_named } from "./lyric_video_song_recording_named.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { lyric_video_part_document_draft } from "./lyric_video_part_document_draft.mjs";
import { lyric_video_songs_documents_draft } from "./lyric_video_songs_documents_draft.mjs";
export async function lyric_video_psalms_part_documents_draft(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Writes a first timing document for every singing of a stanza or half psalm on this machine that has no document for it yet, and says which those were.");
  ("★ THESE SONGS HAD NO ADDRESS AT ALL UNTIL NOW, WHICH IS WORSE THAN HAVING NONE. A whole chapter's document is named by its translation, book and chapter, so nineteen songs that sing a stanza of Psalm 119 or half of Psalm 145 all pointed at the one file for their chapter; drafting a second of them would have written over the first, and the loss would have been somebody's corrected times replaced by an even spread with nothing going red.");
  ("★ EACH SINGING IS DRAFTED SEPARATELY, BECAUSE THE TIMES OF ONE ARRANGEMENT FIT NO OTHER. The two singings of Psalm 147:12-20 run to two and a half minutes and to nearly three, and the stanza Qoph of Psalm 119 is sung five times; one document shared between them would be right for whichever was drafted first and wrong for the rest. Where the second and later singings are written comes from the mark the walk works out for each recording, so the plain singing keeps the address it already had and nobody's corrected times are stranded under a name nothing reads.");
  ("It finds its own set rather than being handed one, which is what stops it drifting from what is actually there. Songs arrive by download a batch at a time, so a written-down list is out of date the moment somebody sings another stanza, and a list that has gone stale reads exactly like a list that is complete.");
  ("The folder is asked for with an empty name on the end because the folder itself is what is wanted rather than a file in it, and there is one place in this repo that knows where songs land.");
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_parts(folder_audio);
  let book_code = "PSA";
  function song_named(song) {
    let passage = song.chapter + ":" + song.verse_first + "-" + song.verse_last;
    let name = lyric_video_song_recording_named(passage, song.mark);
    return name;
  }
  function song_path(song) {
    let path_passage = lyric_video_bible_part_document_path(
      version,
      book_code,
      song.chapter,
      song.verse_first,
      song.verse_last,
    );
    let path = lyric_video_recording_document_path(path_passage, song.mark);
    return path;
  }
  async function song_drafted(song, path_document) {
    let document = await lyric_video_part_document_draft(
      {
        version,
        book_code,
        chapter_number: song.chapter,
        verse_first: song.verse_first,
        verse_last: song.verse_last,
      },
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
