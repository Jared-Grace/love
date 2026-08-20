import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_browse } from "./youtube_innertube_browse.mjs";
import { youtube_browse_stated_count } from "./youtube_browse_stated_count.mjs";
export async function youtube_playlist_count_stated(playlist_id) {
  "How many songs youtube itself says one playlist holds, without reading the songs.";
  "It is here so that the check the reader makes can be looked at on its own. A check that quietly finds nothing to check passes every time and proves nothing, and there is no way to tell that from inside the reader - so the number it works from is asked for separately and read by a person.";
  arguments_assert(arguments, 1);
  let answer = await youtube_innertube_browse({
    browseId: "VL" + playlist_id,
  });
  let count = youtube_browse_stated_count(answer, "video");
  return count;
}
