import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_playlist_order_moves } from "./psalms_playlist_order_moves.mjs";
import { youtube_playlist_item_position_write } from "./youtube_playlist_item_position_write.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function psalms_playlist_order_write(playlist_id) {
  "$plain playlist_id";
  "Puts one chapter's playlist into the order the Psalm reads in, moving only the songs standing in the wrong place.";
  "What to do is worked out first and in full, by a reading that changes nothing, and this only performs it. So the same question can be asked and the answer read over before anybody agrees to it, and what is then performed is the very thing that was read - not a second working out that might have come to something else.";
  "The moves are performed in the order they were worked out, because each was worked out against the order left by the one before it. Performing them in any other order, or leaving one out, makes every later one land somewhere else.";
  arguments_assert(arguments, 1);
  let plan = await psalms_playlist_order_moves(playlist_id);
  let ordered = property_get(plan, "ordered");
  if (not(ordered)) {
    return plan;
  }
  let moves = property_get(plan, "moves");
  for (let move of moves) {
    let playlist_item_id = property_get(move, "playlist_item_id");
    let video_id = property_get(move, "video_id");
    let to = property_get(move, "to");
    await youtube_playlist_item_position_write(
      playlist_item_id,
      playlist_id,
      video_id,
      to,
    );
  }
  let r = {
    playlist_id,
    ordered: true,
    moved_count: list_size(moves),
    moves,
  };
  return r;
}
