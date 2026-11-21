import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_post } from "./youtube_api_post.mjs";
export async function youtube_playlist_item_append(playlist_id, video_id) {
  "$plain playlist_id";
  "$plain video_id";
  "Puts one video at the end of one playlist, and gives back the name of the place it now sits in.";
  "No position is said, unlike youtube_playlist_item_add. A playlist made a moment ago refused a stated position it should have accepted ('Invalid playlist item position'), and in another one two videos added at positions 2 and 3 came out the wrong way round: YouTube had not yet caught up with the videos just put in. Left to fall at the end, a video cannot name a place that does not exist yet.";
  arguments_assert(arguments, 2);
  let body = {
    snippet: {
      playlistId: playlist_id,
      resourceId: {
        kind: "youtube#video",
        videoId: video_id,
      },
    },
  };
  let params = {
    part: "snippet",
  };
  let answer = await youtube_api_post("playlistItems", params, body);
  let r = {
    playlist_item_id: answer.id,
    video_id,
  };
  return r;
}
