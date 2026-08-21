import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_mislabelled_playlist_moves } from "./psalms_videos_mislabelled_playlist_moves.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_contains } from "./list_contains.mjs";
export async function psalms_videos_verse_mislabelled_playlists(channel_id) {
  "$plain channel_id";
  "Every chapter playlist a wrongly named song touched, whether it is the one the song sat in or the one it belongs to, each named once.";
  "Both sides are wanted even when a song never changed chapter, because a corrected verse changes where the song belongs inside its own chapter just as surely as a corrected chapter changes which chapter it belongs to. Asking only about the chapters songs moved into would leave the far commoner case unlooked at.";
  "The set is worked out from the list of wrongly named songs rather than written down, so it cannot fall out of step with that list, and a chapter with no playlist of its own drops out here instead of being carried along as nothing.";
  arguments_assert(arguments, 1);
  let moves = await psalms_videos_mislabelled_playlist_moves(channel_id);
  let playlist_ids = [];
  for (let move of moves) {
    let playlist_leave = property_get(move, "playlist_leave");
    let playlist_join = property_get(move, "playlist_join");
    for (let playlist_id of [playlist_leave, playlist_join]) {
      let missing = null_is(playlist_id);
      if (missing) {
        continue;
      }
      let known = list_contains(playlist_ids, playlist_id);
      if (not(known)) {
        list_add(playlist_ids, playlist_id);
      }
    }
  }
  return playlist_ids;
}
