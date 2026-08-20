import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_chapters_video_order } from "./psalms_chapters_video_order.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
export async function psalms_chapter_songs(channel_id, chapter_number) {
  "The songs one chapter of the Psalms has on a channel, in the order a person would read them, each as its watch code and the title it wears.";
  "It answers about one chapter because that is the size of the question somebody actually has. Checking whether a verse with no song really was never sung means listening to the songs on either side of the gap, and asking the whole channel to hand over all hundred and fifty chapters to read six lines of one of them is a wait paid for nothing.";
  arguments_assert(arguments, 2);
  let uploads_playlist = youtube_channel_uploads_playlist(channel_id);
  let uploads = await youtube_playlist_videos(uploads_playlist);
  let chapters = psalms_chapters_video_order(uploads);
  let songs = chapters[chapter_number] || [];
  return songs;
}
