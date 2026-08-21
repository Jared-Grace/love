import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_playlists } from "./youtube_channel_playlists.mjs";
import { psalms_playlist_chapter_ids } from "./psalms_playlist_chapter_ids.mjs";
import { psalms_playlist_order_moves } from "./psalms_playlist_order_moves.mjs";
import { object_property_names_numbers_sorted } from "./object_property_names_numbers_sorted.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
export async function psalms_playlists_order_moves(channel_id) {
  "$plain channel_id";
  "Every chapter of the Psalms whose playlist is not read in the order the chapter is read in, and what it would take to put each one right - worked out without changing anything.";
  "The chapters already in order are counted and then dropped, because a list naming a hundred and fifty chapters to say that a handful of them are wrong is a list nobody reads. What comes back is the ones that need something and the two numbers saying how much of the channel was looked at to find them.";
  "A chapter whose playlist holds a name that cannot be read as a passage is kept apart from the ones that are simply out of order. Those two need opposite things: one wants a rearrangement, the other wants somebody to look at a name.";
  arguments_assert(arguments, 1);
  let playlists = await youtube_channel_playlists(channel_id);
  let chapter_ids = psalms_playlist_chapter_ids(playlists);
  let chapters = object_property_names_numbers_sorted(chapter_ids);
  let out_of_order = [];
  let refused = [];
  let move_count = 0;
  for (let chapter of chapters) {
    let playlist_id = property_get(chapter_ids, chapter);
    let plan = await psalms_playlist_order_moves(playlist_id);
    let ordered = property_get(plan, "ordered");
    if (not(ordered)) {
      let unreadable = {
        chapter,
        playlist_id,
        title: property_get(plan, "title"),
        why: property_get(plan, "why"),
      };
      list_add(refused, unreadable);
      continue;
    }
    let chapter_moves = property_get(plan, "move_count");
    let wrong = greater_than(chapter_moves, 0);
    if (wrong) {
      let entry = {
        chapter,
        playlist_id,
        move_count: chapter_moves,
        moves: property_get(plan, "moves"),
      };
      list_add(out_of_order, entry);
      move_count = add(move_count, chapter_moves);
    }
  }
  let r = {
    chapter_count: list_size(chapters),
    move_count,
    out_of_order,
    refused,
  };
  return r;
}
