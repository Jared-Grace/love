import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_post } from "./youtube_api_post.mjs";
export async function youtube_playlist_item_append(playlist_id, video_id) {
  "$plain playlist_id";
  "$plain video_id";
  "Puts one video at the end of one playlist, and gives back the name of the place it now sits in.";
  ("No position is said, unlike ",
    fn_name("youtube_playlist_item_add"),
    ". Left to fall at the end, a video cannot name a place the playlist does not have, so an add never fails on a position counted wrong; where it should finally sit is a move made afterwards.");
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
