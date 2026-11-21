import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
export async function youtube_playlist_owner_record(playlist_id) {
  "$plain playlist_id";
  "One playlist's title, privacy and video count as its owner sees them, asked by its id, or nothing when YouTube knows no such playlist.";
  "Asked by id because a listing of the channel's playlists can leave one out: Psalms 145 was made, held its four videos and answered by id, yet both the owner's list and the public page left it out the next day.";
  arguments_assert(arguments, 1);
  let params = {
    part: "snippet,status,contentDetails",
    id: playlist_id,
  };
  let answer = await youtube_api_get("playlists", params);
  let item = answer.items[0];
  if (equal(item, undefined)) {
    return null;
  }
  let r = {
    playlist_id: item.id,
    title: item.snippet.title,
    privacy: item.status.privacyStatus,
    videos: item.contentDetails.itemCount,
    published_at: item.snippet.publishedAt,
  };
  return r;
}
