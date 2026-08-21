import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function youtube_playlist_items(playlist_id) {
  "$plain playlist_id";
  "Every video sitting in one playlist, in the order the playlist puts them, each as the name of its place in that playlist, the video it holds, where in the order it sits, and what it is called.";
  "The name of the place is the point of asking this way rather than by reading the playlist as a stranger would. A playlist does not hold videos directly - it holds places, each with a name of its own, and a place is the only thing that can be moved or taken out. A stranger's reading gives the videos and not the places, so it can say what is wrong and never put it right.";
  "The order is asked for as a number rather than taken from the order things arrive in, because moving a video means saying which number it should sit at, and a position counted by whoever is reading would be a guess about what the far end believes.";
  "Everything is asked for, however many pages that takes. A playlist is handed over fifty at a time, and stopping at the first page would silently answer a question about the whole playlist with a fact about its beginning.";
  arguments_assert(arguments, 1);
  let items = [];
  let page_token = null;
  let more = true;
  while (more) {
    let params = {
      part: "snippet",
      playlistId: playlist_id,
      maxResults: "50",
    };
    let first = null_is(page_token);
    if (!first) {
      property_set(params, "pageToken", page_token);
    }
    let answer = await youtube_api_get("playlistItems", params);
    let page = property_get(answer, "items");
    for (let item of page) {
      let snippet = property_get(item, "snippet");
      let resource = property_get(snippet, "resourceId");
      let entry = {
        playlist_item_id: property_get(item, "id"),
        video_id: property_get(resource, "videoId"),
        position: property_get(snippet, "position"),
        title: property_get(snippet, "title"),
      };
      list_add(items, entry);
    }
    page_token = property_get_or_null(answer, "nextPageToken");
    more = !null_is(page_token);
  }
  return items;
}
