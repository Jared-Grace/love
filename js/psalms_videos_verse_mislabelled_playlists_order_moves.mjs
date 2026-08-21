import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_verse_mislabelled_playlists } from "./psalms_videos_verse_mislabelled_playlists.mjs";
import { psalms_playlist_order_moves } from "./psalms_playlist_order_moves.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export async function psalms_videos_verse_mislabelled_playlists_order_moves(
  channel_id,
) {
  "$plain channel_id";
  "Everything the chapter playlists touched by a wrongly named song would need in order to be read in the order their Psalms are read in, worked out without changing anything.";
  "Nothing is written, so the whole rearrangement can be read over before anybody agrees to any of it. A song was put in the wrong place by a name that was wrong; the remedy is a rearrangement of playlists somebody made by hand, and that is worth seeing whole first.";
  arguments_assert(arguments, 1);
  let playlist_ids =
    await psalms_videos_verse_mislabelled_playlists(channel_id);
  let plans = [];
  let move_count = 0;
  for (let playlist_id of playlist_ids) {
    let plan = await psalms_playlist_order_moves(playlist_id);
    list_add(plans, plan);
    let ordered = property_get(plan, "ordered");
    if (ordered) {
      move_count = add(move_count, property_get(plan, "move_count"));
    }
  }
  let r = {
    playlist_count: list_size(plans),
    move_count,
    plans,
  };
  return r;
}
