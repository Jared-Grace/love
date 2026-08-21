import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_playlist_items } from "./youtube_playlist_items.mjs";
import { youtube_playlist_item_add } from "./youtube_playlist_item_add.mjs";
import { youtube_playlist_item_remove } from "./youtube_playlist_item_remove.mjs";
import { psalms_playlist_items_position } from "./psalms_playlist_items_position.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
export async function psalms_video_playlist_move(
  video_id,
  playlist_leave,
  playlist_join,
) {
  "$plain video_id";
  "$plain playlist_leave";
  "$plain playlist_join";
  "Takes one song out of the chapter playlist it does not belong to and puts it into the one it does, at the place its verse calls for.";
  "This is the other half of correcting a name. The playlist a song sits in was chosen by the name it used to wear, so a corrected name leaves it filed under a chapter it is not of and missing from the chapter it is - and a playlist says nothing about being wrong, so nobody would find out except by reading the whole of it.";
  "Where it belongs is worked out from the name it wears at this moment, and from the playlist as it stands at this moment, rather than from anything written down beforehand. A place worked out earlier would be a place in a playlist that has since been added to.";
  "It goes in before it comes out, and never the other way round. A song that fails to go in is a song still safely where it was; a song taken out first and then failing to go in is a song in no playlist at all, and nothing would be left saying where it had been. In between it is briefly in both, which anybody reading can see and anybody can undo.";
  "A song already gone from the playlist it was to leave is left entirely alone. That is what an earlier run of this looks like, and doing the work again would put a second copy into the playlist it was to join.";
  arguments_assert(arguments, 3);
  let items_leave = await youtube_playlist_items(playlist_leave);
  let sitting = list_find_property(items_leave, "video_id", video_id);
  let gone = null_is(sitting);
  if (gone) {
    let refused = {
      video_id,
      moved: false,
      why: "the song is not in the playlist it was to leave",
    };
    return refused;
  }
  let title = property_get(sitting, "title");
  let passage = psalms_title_passage(title);
  let unreadable = null_is(passage);
  if (unreadable) {
    let refused = {
      video_id,
      moved: false,
      title,
      why: "the name does not name a passage of the Psalms",
    };
    return refused;
  }
  let items_join = await youtube_playlist_items(playlist_join);
  let position = psalms_playlist_items_position(items_join, passage);
  let added = await youtube_playlist_item_add(
    playlist_join,
    video_id,
    position,
  );
  let playlist_item_id = property_get(sitting, "playlist_item_id");
  await youtube_playlist_item_remove(playlist_item_id);
  let r = {
    video_id,
    moved: true,
    title,
    position,
    playlist_item_id_now: property_get(added, "playlist_item_id"),
  };
  return r;
}
