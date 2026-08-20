import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { psalms_playlists_plan } from "./psalms_playlists_plan.mjs";
import { psalms_playlists_plan_payload_path } from "./psalms_playlists_plan_payload_path.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
export async function psalms_playlists_plan_payload_write() {
  "Writes down only the Psalm playlists that still need something done to them, so a new song can be put where it belongs without the whole channel being gone over again.";
  "Everything that needs no sign-in is worked out first and what is left is small, which is what makes it safe to look over before anything is touched. When nothing has been uploaded since last time the list comes out empty, and an empty list is the whole answer.";
  let channel_id = youtube_channel_bible_singing();
  let plan = await psalms_playlists_plan(channel_id);
  let pending = [];
  for (let one of plan) {
    let video_ids = [];
    for (let song of one.add) {
      video_ids.push(song.video_id);
    }
    let nothing_to_add = video_ids.length === 0;
    let has_playlist = one.playlist_id !== null;
    if (nothing_to_add && has_playlist && one.out_of_order === false) {
      continue;
    }
    pending.push({
      chapter: one.chapter,
      playlist_id: one.playlist_id,
      add: video_ids,
      songs_wanted: one.songs_wanted,
      out_of_order: one.out_of_order,
    });
  }
  let path = psalms_playlists_plan_payload_path();
  await file_overwrite_json(path, pending);
  let r = {
    path: path,
    chapters_read: plan.length,
    chapters_pending: pending.length,
  };
  return r;
}
