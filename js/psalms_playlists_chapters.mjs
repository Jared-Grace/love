import { object_property_names_numbers_sorted } from "./object_property_names_numbers_sorted.mjs";
import { psalms_playlist_chapter_ids } from "./psalms_playlist_chapter_ids.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
import { youtube_channel_playlists } from "./youtube_channel_playlists.mjs";
export async function psalms_playlists_chapters() {
  "Every chapter of the Psalms that already has a playlist of its own on the singing channel: the chapter numbers in counting order, and which playlist each of them belongs to.";
  "The channel is asked rather than a list of what was made being kept, so a playlist somebody made by hand this morning is already known about, and a chapter whose playlist has gone stops being counted the moment it goes.";
  "Three commands opened with these same lines - the one that writes the words down, the one that pairs them with their playlists for a signed-in run, and the one that reads them back afterwards. They have to agree about which chapters there are, because the reading is worthless if it is of a different set from the writing, and a disagreement between three copies of an opening is the kind nothing reports.";
  let channel_id = youtube_channel_bible_singing();
  let playlists = await youtube_channel_playlists(channel_id);
  let chapter_ids = psalms_playlist_chapter_ids(playlists);
  let chapters = object_property_names_numbers_sorted(chapter_ids);
  let r = {
    chapter_ids: chapter_ids,
    chapters: chapters,
  };
  return r;
}
