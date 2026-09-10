import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { lyric_video_recording_document_path } from "./lyric_video_recording_document_path.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_song_recording_named } from "./lyric_video_song_recording_named.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { lyric_video_song_video_stale_write } from "./lyric_video_song_video_stale_write.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_psalms_videos_write(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Makes the lyric video of every singing of a psalm on this machine that has a timing document and no video beside it yet, or whose video is older than what it was made from, and says which those were.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, so it cannot drift from what is actually there. Songs arrive in the download folder in batches and documents are drafted in batches, and a list of psalms typed out at either moment is a list that is wrong by the next one. Asking the folder each time is also what makes this the one command to run after anything at all has changed - a new song, a corrected timing, a drawing that has just been made - without anybody having to work out which psalms that touched.");
  ("★ EVERY SINGING GETS ITS OWN VIDEO, BECAUSE TWO ARRANGEMENTS OF A PSALM ARE TWO SONGS AND THE POINT OF HAVING SUNG IT TWICE IS TO HAVE BOTH. A passage used to mean one video made from the earliest recording of it, which left about a hundred recordings on this machine that nothing could reach - five arrangements of Psalm 110 among them, at lengths from a minute and a quarter to a minute and a half. Each singing has its own times, because a rendition that runs half a minute longer puts every line somewhere else, so it has its own document and its own video and neither can be made from the other's numbers.");
  ("★ WHICH SINGING A ROW IS COMES FROM THE WALK THAT FOUND IT AND IS CARRIED WHOLE THROUGH THIS. The same short mark addresses the timing document, names the row in this report, and goes into what the video is called, so a psalm in the made list, a file on the disk and a document in the repo can be lined up by eye without anything being worked out twice. Deriving it again here from a chapter and a number would be the second spelling that eventually disagrees with the first.");
  ("★ WHOLE CHAPTERS AND PARTS OF CHAPTERS ARE BOTH WALKED, BECAUSE BETWEEN THEM THEY ARE EVERY PSALM SONG IN THE FOLDER. There are two readings of the folder on purpose, one answering for a song of a whole chapter and one for a song of a stanza or a half, and a walk that asked only the first would finish saying it was done with a fifth of the folder never looked at. The two differ only in how a passage is said and where its document lives, so those two things are worked out per song and the rest of the walk is written once.");
  ("★ A SONG WITH NO TIMING DOCUMENT IS REPORTED BY NAME AND NOT DRAFTED HERE. Drafting spreads the lines evenly over the song, which makes a video worth watching once and never worth publishing, and the drafting command already exists and already refuses to write over anybody's corrected times. Doing it here would quietly turn a run that makes finished videos into one that also makes unfinished ones, and the two are told apart only by watching them.");
  ("A song that cannot be rendered is set aside with what went wrong and the rest are still made. One psalm with a fault in its document is no reason for the other forty to go without videos, and stopping at the first would hide how many were actually reachable.");
  ("Nothing here is committed, because nothing it writes is in the repo: the videos and their fault lists go beside the songs in somebody's download folder, and the subtitle workings-out go to the ignored folder.");
  let folder_audio = folder_user_downloads_path("");
  let chapters = await psalms_songs_folder_chapters(folder_audio);
  let parts = await psalms_songs_folder_parts(folder_audio);
  let wanted = [];
  for (let song of chapters) {
    let passage = "Psalm " + song.chapter;
    let path_passage = lyric_video_bible_document_path(
      version,
      "PSA",
      song.chapter,
    );
    let path_document = lyric_video_recording_document_path(
      path_passage,
      song.mark,
    );
    list_add(wanted, {
      passage: lyric_video_song_recording_named(passage, song.mark),
      path_audio: song.path_audio,
      path_document,
      mark: song.mark,
    });
  }
  for (let song of parts) {
    let passage =
      "Psalm " + song.chapter + ":" + song.verse_first + "-" + song.verse_last;
    let path_passage = lyric_video_bible_part_document_path(
      version,
      "PSA",
      song.chapter,
      song.verse_first,
      song.verse_last,
    );
    let path_document = lyric_video_recording_document_path(
      path_passage,
      song.mark,
    );
    list_add(wanted, {
      passage: lyric_video_song_recording_named(passage, song.mark),
      path_audio: song.path_audio,
      path_document,
      mark: song.mark,
    });
  }
  let made = [];
  let kept = [];
  let undocumented = [];
  let refused = [];
  for (let one of wanted) {
    let documented = await file_exists(one.path_document);
    if (not(documented)) {
      list_add(undocumented, one.passage);
      continue;
    }
    try {
      let written = await lyric_video_song_video_stale_write(
        version,
        one.path_audio,
        one.path_document,
        one.mark,
      );
      if (not(written.wrote)) {
        list_add(kept, one.passage);
        continue;
      }
      list_add(made, {
        passage: one.passage,
        path_output: written.path_output,
        pictures: written.pictures,
        pictures_missing: list_size(written.pictures_missing),
      });
    } catch (e) {
      list_add(refused, {
        passage: one.passage,
        went_wrong: e.message,
      });
    }
  }
  let r = {
    songs: list_size(wanted),
    made,
    kept,
    undocumented,
    refused,
  };
  return r;
}
