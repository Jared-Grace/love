import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_post } from "./youtube_api_post.mjs";
export async function youtube_playlist_insert_public(title) {
  "$plain title";
  "Makes a new public playlist on the signed-in channel with this title, and hands back its id.";
  arguments_assert(arguments, 1);
  let params = {
    part: "snippet,status",
  };
  let body = {
    snippet: {
      title: title,
    },
    status: {
      privacyStatus: "public",
    },
  };
  let answer = await youtube_api_post("playlists", params, body);
  let playlist_id = answer.id;
  return playlist_id;
}
