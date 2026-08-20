import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_browse } from "./youtube_innertube_browse.mjs";
export async function youtube_playlist_browse_answer(playlist_id) {
  "The whole of what youtube sends back when asked for one playlist, unread and unshortened.";
  "Everything else here reads this answer for one thing and throws the rest away, which is right until youtube moves something - and then the reader answers nothing and cannot say why. This is the reading to look at then: what youtube actually sent, in front of a person, rather than a guess about where it used to keep what was wanted.";
  arguments_assert(arguments, 1);
  let answer = await youtube_innertube_browse({
    browseId: "VL" + playlist_id,
  });
  return answer;
}
