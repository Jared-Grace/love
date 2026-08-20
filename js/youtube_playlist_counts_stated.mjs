import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_browse } from "./youtube_innertube_browse.mjs";
import { youtube_browse_stated_counts } from "./youtube_browse_stated_counts.mjs";
export async function youtube_playlist_counts_stated(playlist_id) {
  "Every different number of songs youtube's own answer names for one playlist, without reading the songs.";
  "This is what to ask when the reader's check turns out to be checking nothing. One number means the check has something to hold the reading against; none or several mean it has stood aside, and only the numbers themselves say which and why.";
  arguments_assert(arguments, 1);
  let answer = await youtube_innertube_browse({
    browseId: "VL" + playlist_id,
  });
  let counts = youtube_browse_stated_counts(answer, "video");
  return counts;
}
