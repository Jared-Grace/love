import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_mislabelled_playlist_moves } from "./psalms_videos_mislabelled_playlist_moves.mjs";
import { psalms_video_playlist_move } from "./psalms_video_playlist_move.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size } from "./list_size.mjs";
export async function psalms_videos_verse_mislabelled_playlists_move(
  channel_id,
) {
  "$plain channel_id";
  "Moves every wrongly named song that turned out to be of a different chapter into that chapter's playlist, at the place its verse calls for.";
  "Only the ones that changed chapter are moved. Most of the corrected names were wrong about the verse and right about the chapter, so their playlist was right all along and touching it would be work that undoes nothing and risks something.";
  "A chapter with no playlist of its own is passed over and said so rather than guessed at. Making one would be a decision about how the channel is arranged, which belongs to whoever arranges it.";
  "The set is asked for rather than handed in, so this cannot be run against a list of moves worked out before the names were corrected.";
  arguments_assert(arguments, 1);
  let moves = await psalms_videos_mislabelled_playlist_moves(channel_id);
  let rows = [];
  for (let move of moves) {
    let video_id = property_get(move, "video_id");
    let chapter_leave = property_get(move, "chapter_leave");
    let chapter_join = property_get(move, "chapter_join");
    let same = equal(chapter_leave, chapter_join);
    if (same) {
      continue;
    }
    let playlist_leave = property_get(move, "playlist_leave");
    let playlist_join = property_get(move, "playlist_join");
    let a = null_is(playlist_leave);
    let b = null_is(playlist_join);
    let missing = a || b;
    if (missing) {
      let refused = {
        video_id,
        moved: false,
        why: "one of the two chapters has no playlist",
      };
      list_add(rows, refused);
      continue;
    }
    let moved = await psalms_video_playlist_move(
      video_id,
      playlist_leave,
      playlist_join,
    );
    list_add(rows, moved);
  }
  let moved_rows = list_filter_property(rows, "moved", true);
  let moved_count = list_size(moved_rows);
  let asked_count = list_size(rows);
  let r = {
    asked_count,
    moved_count,
    rows,
  };
  return r;
}
