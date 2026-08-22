import { psalms_titles_faults_verse_first } from "./psalms_titles_faults_verse_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_items } from "./youtube_playlist_items.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { null_is } from "./null_is.mjs";
export async function psalms_titles_faults(channel_id) {
  "$plain channel_id";
  "Every song on the channel whose name is wrong about the Psalms in a way that can be proved without listening to it, and everything set aside as not being about the Psalms at all.";
  "Three faults can be proved from the name alone against the text itself: a verse further on than the chapter has, a range that runs backwards, and two songs claiming the very same verses. None of them needs anybody to hear a note, which is what makes this worth running over a whole channel where listening is worth running over a handful.";
  "A wrong verse that names a verse the chapter really has is invisible here and always will be. That is the fault that was found by listening, and this does not pretend to find it - what it does is clear away everything that never needed listening to, so that the listening is spent where only listening will do.";
  "Nothing is changed. A name is the singer's, and a name that looks wrong from the outside may be right for a reason the outside cannot see.";
  arguments_assert(arguments, 1);
  let uploads_playlist = await youtube_channel_uploads_playlist(channel_id);
  let items = await youtube_playlist_items(uploads_playlist);
  let passages = [];
  let named_otherwise = [];
  let chapters = [];
  for (let item of items) {
    let title = property_get(item, "title");
    let passage = psalms_title_passage(title);
    let unreadable = null_is(passage);
    if (unreadable) {
      let aside = {
        video_id: property_get(item, "video_id"),
        title,
      };
      list_add(named_otherwise, aside);
      continue;
    }
    let value = property_get(item, "video_id");
    property_set(passage, "video_id", value);
    property_set(passage, "title", title);
    list_add(passages, passage);
    let chapter = property_get(passage, "chapter");
    let fresh = list_includes_not(chapters, chapter);
    if (fresh) {
      list_add(chapters, chapter);
    }
  }
  let faults = await psalms_titles_faults_verse_first(chapters, passages);
  let r = {
    video_count: list_size(items),
    of_the_psalms: list_size(passages),
    fault_count: list_size(faults),
    named_otherwise_count: list_size(named_otherwise),
    faults,
    named_otherwise,
  };
  return r;
}
