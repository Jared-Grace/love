import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
export async function youtube_channel_uploads_newest(channel_id) {
  "The fifty newest uploads of one channel as its owner sees them, private ones and half-finished ones included, each as its watch code, title, privacy and when it was published.";
  "Asked signed in, because a failed upload leaves a private copy that the public list never shows - and that copy is exactly what has to be found before trying again, or the retry becomes a duplicate.";
  arguments_assert(arguments, 1);
  let params = {
    part: "snippet,status",
    playlistId: youtube_channel_uploads_playlist(channel_id),
    maxResults: 50,
  };
  let answer = await youtube_api_get("playlistItems", params);
  let videos = [];
  for (let item of answer.items) {
    videos.push({
      video_id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      privacy: item.status.privacyStatus,
      published_at: item.snippet.publishedAt,
    });
  }
  return videos;
}
