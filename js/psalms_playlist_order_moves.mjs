import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_playlist_items } from "./youtube_playlist_items.mjs";
import { psalms_playlist_item_order_key } from "./psalms_playlist_item_order_key.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_add } from "./list_add.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
export async function psalms_playlist_order_moves(playlist_id) {
  "$plain playlist_id";
  "The moves one chapter's playlist would need to be read in the order the Psalm is read in, worked out without changing anything.";
  "Each move is worked out against the order as it stands after the move before it, not against the order the playlist was found in. Moving a song to the third place pushes whatever was third down into fourth, so a run of moves all worked out at the start would be wrong from the second one onward - and wrong quietly, since each move on its own does exactly what it was told. That is also what makes this list replayable: performing it in order reproduces exactly what was worked out here.";
  "A playlist holding a name this cannot read comes back refused and untouched. Sorting it would mean deciding where that song goes, and there is nothing here that knows - so refusing keeps a playlist somebody arranged deliberately from being rearranged by a guess.";
  "Songs already in the right place produce no move at all, so a playlist already in order comes back with an empty list. Reading it costs nothing but the reading.";
  arguments_assert(arguments, 1);
  let items = await youtube_playlist_items(playlist_id);
  for (let item of items) {
    let title = property_get(item, "title");
    let passage = psalms_title_passage(title);
    let unreadable = null_is(passage);
    if (unreadable) {
      let refused = {
        playlist_id,
        ordered: false,
        title,
        why: "the playlist holds a name that does not name a passage of the Psalms",
      };
      return refused;
    }
  }
  let wanted = list_copy(items);
  list_sort_number_mapper(wanted, psalms_playlist_item_order_key);
  let standing = list_copy(items);
  let moves = [];
  let count = list_size(wanted);
  let place = 0;
  while (less_than(place, count)) {
    let item = wanted[place];
    let at = list_index_of(standing, item);
    let already = equal(at, place);
    if (not(already)) {
      list_remove_at(standing, at);
      list_insert(standing, place, item);
      let move = {
        playlist_item_id: property_get(item, "playlist_item_id"),
        video_id: property_get(item, "video_id"),
        title: property_get(item, "title"),
        from: at,
        to: place,
      };
      list_add(moves, move);
    }
    place = place + 1;
  }
  let r = {
    playlist_id,
    ordered: true,
    move_count: list_size(moves),
    moves,
  };
  return r;
}
