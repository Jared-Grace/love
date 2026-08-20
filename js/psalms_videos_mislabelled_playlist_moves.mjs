import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_verse_mislabelled } from "./psalms_videos_verse_mislabelled.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { psalms_playlist_chapter_ids } from "./psalms_playlist_chapter_ids.mjs";
import { youtube_channel_playlists } from "./youtube_channel_playlists.mjs";
export async function psalms_videos_mislabelled_playlist_moves(channel_id) {
  "Everything one channel would have to change to put the wrongly titled songs right: for each of them the title it wears now, the title it should wear, the chapter playlist it is sitting in and the chapter playlist it belongs to.";
  "Renaming a song is only half of putting it right. The playlist it is in was chosen by the title it had, so a corrected title leaves the song in a chapter it does not belong to and still absent from the chapter it does - and neither of those shows up as an error anywhere. This says both halves at once so that neither is done without the other.";
  "Nothing is changed here. The channel is only read, and reading needs nobody signed in, so the whole set of moves can be looked over before anybody touches anything. Which of them to make, and whether to make them at all, is the singer's judgement.";
  arguments_assert(arguments, 1);
  let playlists = await youtube_channel_playlists(channel_id);
  let chapter_ids = psalms_playlist_chapter_ids(playlists);
  let moves = [];
  for (let entry of psalms_videos_verse_mislabelled()) {
    let titled = psalms_title_passage(entry.titled);
    let sung = psalms_title_passage(entry.sung);
    let move = {
      video_id: entry.video_id,
      title_before: entry.titled,
      title_after: entry.sung,
      chapter_leave: titled.chapter,
      chapter_join: sung.chapter,
      playlist_leave: chapter_ids[titled.chapter] || null,
      playlist_join: chapter_ids[sung.chapter] || null,
    };
    moves.push(move);
  }
  return moves;
}
