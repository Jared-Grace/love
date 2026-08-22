import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_put } from "./youtube_api_put.mjs";
import { youtube_playlist_item_snippet } from "./youtube_playlist_item_snippet.mjs";
export async function youtube_playlist_item_position_write(
  playlist_item_id,
  playlist_id,
  video_id,
  position,
) {
  "$plain playlist_item_id";
  "$plain playlist_id";
  "$plain video_id";
  "$plain position";
  "Moves one video already in a playlist to a chosen place in its order, and gives back where it ended up.";
  "Everything else about the sitting has to be sent along even though only the place is changing, because this replaces the description of the sitting rather than mending it - a description sent holding only a number would be a sitting with no playlist and no video, which is not a move but a destruction.";
  "The other videos shuffle up or down around this one. Moving a video to the third place makes whatever was third become fourth, so a run of moves worked out all at once against the order as it stands will be wrong by the second move. Each move is worked out against the order as it is at that moment.";
  arguments_assert(arguments, 4);
  let snippet = youtube_playlist_item_snippet(playlist_id, video_id, position);
  let body = {
    id: playlist_item_id,
    snippet: snippet,
  };
  let params = {
    part: "snippet",
  };
  let answer = await youtube_api_put("playlistItems", params, body);
  let position_after = property_path_get_2(answer, "snippet", "position");
  let r = {
    playlist_item_id,
    video_id,
    position_after,
  };
  return r;
}
