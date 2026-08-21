import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_delete } from "./youtube_api_delete.mjs";
export async function youtube_playlist_item_remove(playlist_item_id) {
  "$plain playlist_item_id";
  "Takes one video out of one playlist, and says so once it is out.";
  "The video itself is untouched and stays on the channel. What goes is the place it was sitting in, which is a thing of the playlist's rather than of the video's - so a video taken out of every playlist is still there to be found, and a video is not lost by this even when it is taken out of the only playlist holding it.";
  "The name of the place is what is asked for, not the name of the video. A video can sit in many playlists at once, so naming the video would not say which of those sittings was meant.";
  arguments_assert(arguments, 1);
  let params = {
    id: playlist_item_id,
  };
  let r = await youtube_api_delete("playlistItems", params);
  return r;
}
