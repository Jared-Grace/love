import { arguments_assert } from "./arguments_assert.mjs";
export function youtube_channel_uploads_playlist(channel_id) {
  "The playlist holding everything a channel has ever put up, named from the channel's own word.";
  "Youtube keeps one such playlist for every channel and names it by swapping the two letters a channel's word opens with. Nothing has to be asked of youtube to know it, so this is worked out here rather than fetched, and it cannot go out of date.";
  arguments_assert(arguments, 1);
  let playlist_id = "UU" + channel_id.slice(2);
  return playlist_id;
}
