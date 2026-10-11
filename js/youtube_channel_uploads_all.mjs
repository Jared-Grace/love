import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
export async function youtube_channel_uploads_all(channel_id) {
  arguments_assert(arguments, 1);
  ("$plain channel_id");
  ("Every video the channel has uploaded, private and unlisted ones included, newest first - each with its title, who may watch it, and when it went up.");
  ("★ IT WALKS EVERY PAGE, WHICH IS THE WHOLE DIFFERENCE FROM THE NEWEST-FIFTY READING. One ask hands back at most fifty, and a question like 'was this recording ever uploaded' answered from the first fifty answers no for every older video, in silence.");
  let videos = [];
  let page_token = null;
  while (true) {
    let params = {
      part: "snippet,status",
      playlistId: youtube_channel_uploads_playlist(channel_id),
      maxResults: 50,
    };
    if (not_equal(page_token, null)) {
      params.pageToken = page_token;
    }
    let answer = await youtube_api_get("playlistItems", params);
    for (let item of answer.items) {
      videos.push({
        video_id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        privacy: item.status.privacyStatus,
        published_at: item.snippet.publishedAt,
      });
    }
    let next = answer.nextPageToken;
    if (equal(next, undefined)) {
      return videos;
    }
    page_token = next;
  }
}
