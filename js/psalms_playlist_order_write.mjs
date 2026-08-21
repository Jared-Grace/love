import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_playlist_items } from "./youtube_playlist_items.mjs";
import { youtube_playlist_item_position_write } from "./youtube_playlist_item_position_write.mjs";
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
export async function psalms_playlist_order_write(playlist_id) {
  "$plain playlist_id";
  "Puts one chapter's playlist into the order the Psalm reads in, moving only the songs that are standing in the wrong place.";
  "A playlist holding a name this cannot read is left entirely untouched and said so. Sorting it would mean deciding where that song goes, and there is nothing here that knows - so refusing keeps a playlist somebody arranged deliberately from being rearranged by a guess.";
  "Each move is worked out against the order as it stands after the move before it, not against the order as it was found. Moving a song to the third place pushes whatever was third down into fourth, so a run of moves all worked out at the start would be wrong from the second one onward - and wrong quietly, since each move on its own does exactly what it was told.";
  "Only songs out of place are moved, so a playlist already in order costs nothing but the reading of it. That is what makes this safe to run over every chapter rather than only over the ones somebody has decided are wrong.";
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
      let playlist_item_id = property_get(item, "playlist_item_id");
      let video_id = property_get(item, "video_id");
      await youtube_playlist_item_position_write(
        playlist_item_id,
        playlist_id,
        video_id,
        place,
      );
      list_remove_at(standing, at);
      list_insert(standing, place, item);
      let move = {
        title: property_get(item, "title"),
        from: at,
        to: place,
      };
      list_add(moves, move);
    }
    place = place + 1;
  }
  let moved_count = list_size(moves);
  let r = {
    playlist_id,
    ordered: true,
    moved_count,
    moves,
  };
  return r;
}
