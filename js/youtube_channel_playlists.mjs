import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_playlists_params } from "./youtube_channel_playlists_params.mjs";
import { youtube_lockups_paged } from "./youtube_lockups_paged.mjs";
export async function youtube_channel_playlists(channel_id) {
  "Every playlist a channel shows the world, each as the word youtube knows it by and the name it wears.";
  "This is the reading that survives losing a note: a playlist made an hour ago and never written down anywhere is still here, because the channel itself is the record. Anything that keeps its own list of what it made can only be as right as the last time it wrote that list down.";
  arguments_assert(arguments, 1);
  let params = youtube_channel_playlists_params();
  let items = await youtube_lockups_paged(
    {
      browseId: channel_id,
      params: params,
    },
    "playlist",
  );
  let playlists = [];
  for (let item of items) {
    playlists.push({
      playlist_id: item.content_id,
      title: item.title,
    });
  }
  return playlists;
}
