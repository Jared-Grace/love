import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
import { song_image_couplets_title_verse } from "./song_image_couplets_title_verse.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function song_image_couplets_videos(channel_id) {
  "$plain channel_id";
  "Every song of this hymn on a channel, each with the verse it sings, its name and its address - the whole hymn counting as verse 0.";
  "IT FINDS ITS OWN SONGS off the names. Every other song on this channel says a psalm in its name and is answered out of that name; this hymn is not Scripture set to music, so there is no verse to derive, and which songs are its cuts is read off what they are called. A cut uploaded tomorrow is covered by running this again rather than by somebody adding an address to a list.";
  "It is separate from the writing because the same reading answers two questions - what would be written, and what to write - and reading the channel twice could give two different answers.";
  arguments_assert(arguments, 1);
  let uploads_playlist = youtube_channel_uploads_playlist(channel_id);
  let uploads = await youtube_playlist_videos(uploads_playlist);
  let hymn_videos = [];
  for (let video of uploads) {
    let verse = song_image_couplets_title_verse(video.title);
    let other = equal(verse, null);
    if (other) {
      continue;
    }
    let hymn_video = {
      verse: verse,
      title: video.title,
      video_id: video.video_id,
    };
    list_add(hymn_videos, hymn_video);
  }
  return hymn_videos;
}
