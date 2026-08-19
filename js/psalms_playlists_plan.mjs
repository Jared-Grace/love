import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { psalms_chapters_video_order } from "./psalms_chapters_video_order.mjs";
import { psalms_playlist_chapter_ids } from "./psalms_playlist_chapter_ids.mjs";
import { youtube_channel_playlists } from "./youtube_channel_playlists.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
export async function psalms_playlists_plan(channel_id) {
  "What one channel's Psalm playlists would have to change to hold every sung passage of their chapter in the order of the Psalm: for each chapter, the playlist it belongs to, the songs it is still missing, and whether the ones already there stand in the right order.";
  "Nothing is changed here, and that is the point. Signing in is what a change costs, and a reading needs no sign-in at all, so the whole judgement can be made and looked over before anybody touches the channel. What comes back is small enough to hand to whatever does the touching.";
  "The channel is asked what playlists it has rather than a note of what was made being kept, so a playlist somebody made by hand this morning is already known about, and one made by a run whose notes were lost is not made twice.";
  arguments_assert(arguments, 1);
  let uploads_playlist = youtube_channel_uploads_playlist(channel_id);
  let uploads = await youtube_playlist_videos(uploads_playlist);
  let wanted = psalms_chapters_video_order(uploads);
  let playlists = await youtube_channel_playlists(channel_id);
  let chapter_ids = psalms_playlist_chapter_ids(playlists);
  let chapters = [];
  for (let named of object_property_names(wanted)) {
    let v = Number(named);
    chapters.push(v);
  }
  function lambda(one, other) {
    let difference = subtract(one, other);
    return difference;
  }
  chapters.sort(lambda);
  async function lambda_chapter(chapter) {
    let playlist_id = chapter_ids[chapter] || null;
    let songs = wanted[chapter];
    let holds = [];
    if (not_equal(playlist_id, null)) {
      let inside = await youtube_playlist_videos(playlist_id);
      for (let video of inside) {
        holds.push(video.video_id);
      }
    }
    let songs_to_add = [];
    let order_wanted = [];
    for (let song of songs) {
      order_wanted.push(song.video_id);
      let b = holds.includes(song.video_id);
      if (not(b)) {
        songs_to_add.push({
          video_id: song.video_id,
          title: song.title,
        });
      }
    }
    let kept = [];
    for (let video_id of holds) {
      if (order_wanted.includes(video_id)) {
        kept.push(video_id);
      }
    }
    let ordered = [];
    for (let video_id of order_wanted) {
      if (holds.includes(video_id)) {
        ordered.push(video_id);
      }
    }
    let left = kept.join(",");
    let right = ordered.join(",");
    let out_of_order = not_equal(left, right);
    let r = {
      chapter: chapter,
      playlist_id: playlist_id,
      songs_wanted: order_wanted,
      songs_held: holds.length,
      add: add,
      strangers: subtract(holds.length, kept.length),
      out_of_order: out_of_order,
    };
    return r;
  }
  let plan = await list_map_limited_async(chapters, lambda_chapter, 8);
  return plan;
}
