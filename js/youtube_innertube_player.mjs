import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_ask } from "./youtube_innertube_ask.mjs";
export async function youtube_innertube_player(video_id) {
  "$plain video_id";
  "What youtube tells a player about one video when it is about to show it: the title, how long it runs, how many have watched, what the singer wrote under it, and which written-out versions of the words it has.";
  "Nobody is signed in here, so this only ever sees what anybody with the address would see, and it cannot change anything. The playlist reader next door asks a different address for a different kind of thing; a video is not a list, so it is asked for separately rather than by widening that one.";
  arguments_assert(arguments, 1);
  let answer = await youtube_innertube_ask("player", {
    videoId: video_id,
  });
  return answer;
}
