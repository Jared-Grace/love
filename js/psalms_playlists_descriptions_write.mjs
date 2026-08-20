import { psalms_chapters_descriptions_write } from "./psalms_chapters_descriptions_write.mjs";
import { psalms_playlist_chapter_ids } from "./psalms_playlist_chapter_ids.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
import { youtube_channel_playlists } from "./youtube_channel_playlists.mjs";
export async function psalms_playlists_descriptions_write() {
  "Writes down the words of every chapter of the Psalms that already has a playlist of its own on the channel, ready to be put underneath it.";
  "It works out which chapters those are by asking the channel, so it takes nothing and can simply be run. A list handed in would have been a second place the truth was written, and the day a new chapter got a playlist the list would have been the reason its words never appeared.";
  let channel_id = youtube_channel_bible_singing();
  let playlists = await youtube_channel_playlists(channel_id);
  let chapter_ids = psalms_playlist_chapter_ids(playlists);
  let chapters = [];
  for (let named of Object.keys(chapter_ids)) {
    chapters.push(Number(named));
  }
  chapters.sort(function lambda(one, other) {
    return one - other;
  });
  let written = await psalms_chapters_descriptions_write(chapters);
  return written;
}
