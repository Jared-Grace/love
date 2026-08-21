import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_post } from "./youtube_api_post.mjs";
import { youtube_playlist_item_snippet } from "./youtube_playlist_item_snippet.mjs";
import { property_get } from "./property_get.mjs";
export async function youtube_playlist_item_add(
  playlist_id,
  video_id,
  position,
) {
  "$plain playlist_id";
  "$plain video_id";
  "$plain position";
  "Puts one video into one playlist at a chosen place in its order, and gives back the name of the place it now sits in.";
  "The name of the place is what comes back rather than anything about the video, because that name is the only handle on this particular sitting - it is what would later move it or take it out, and it does not exist until the sitting does.";
  "Where in the order it goes is said outright rather than left to fall at the end. A playlist meant to read in the order of a Psalm has a right place for every verse, and putting a verse at the end and shuffling afterwards would leave the playlist briefly wrong in a way anybody reading it at that moment would see.";
  "Asking twice puts the same video in twice. Nothing here refuses a video the playlist already holds, so whether it is already there is a question to settle before asking.";
  arguments_assert(arguments, 3);
  let snippet = youtube_playlist_item_snippet(playlist_id, video_id, position);
  let body = {
    snippet: snippet,
  };
  let params = {
    part: "snippet",
  };
  let answer = await youtube_api_post("playlistItems", params, body);
  let playlist_item_id = property_get(answer, "id");
  let r = {
    playlist_item_id,
    video_id,
    position,
  };
  return r;
}
