import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { psalms_playlists_plan } from "./psalms_playlists_plan.mjs";
import { psalms_playlists_order_payload_path } from "./psalms_playlists_order_payload_path.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
export async function psalms_playlists_order_payload_write() {
  "Writes down only the Psalm playlists whose songs stand in the wrong order, and for each of them the songs that would have to be taken out and put back at the end to set it right.";
  "A playlist puts a song added to it at the end, so every song added after the first pass sits after songs it should come before, and nobody reading the chapter through hears it in the order of the Psalm. Nothing here is changed and nothing needs signing in, so the list can be read over before anything is touched.";
  "A playlist that is missing songs is left out of this. Adding them puts them at the end too and changes what the order would have to be, so the songs go in first and the order is asked about afterwards.";
  let channel_id = youtube_channel_bible_singing();
  let plan = await psalms_playlists_plan(channel_id);
  let pending = [];
  for (let one of plan) {
    let has_playlist = not_equal(one.playlist_id, null);
    let waiting_on_songs = not_equal(one.add.length, 0);
    let nothing_to_move = equal(one.move_to_end.length, 0);
    if (nothing_to_move || waiting_on_songs || equal(has_playlist, false)) {
      continue;
    }
    pending.push({
      chapter: one.chapter,
      playlist_id: one.playlist_id,
      move_to_end: one.move_to_end,
    });
  }
  let path = psalms_playlists_order_payload_path();
  await file_overwrite_json(path, pending);
  let r = {
    path: path,
    chapters_read: plan.length,
    chapters_pending: pending.length,
  };
  return r;
}
