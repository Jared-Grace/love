import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
export async function youtube_playlists_mine() {
  "Every playlist the signed-in channel owns, each with its id and its title, private ones included.";
  "Asked of the owner's own door rather than read off the public channel page, because a playlist made a moment ago can take a while to show on the page, and a command that looked there before making one would make it twice.";
  arguments_assert(arguments, 0);
  let playlists = [];
  let page_token = null;
  while (true) {
    let params = {
      part: "snippet",
      mine: "true",
      maxResults: "50",
    };
    if (not_equal(page_token, null)) {
      params.pageToken = page_token;
    }
    let answer = await youtube_api_get("playlists", params);
    for (let item of answer.items) {
      playlists.push({
        playlist_id: item.id,
        title: item.snippet.title,
      });
    }
    let next = answer.nextPageToken;
    if (equal(next, undefined)) {
      return playlists;
    }
    page_token = next;
  }
}
