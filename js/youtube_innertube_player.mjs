import { arguments_assert } from "./arguments_assert.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { youtube_innertube_context } from "./youtube_innertube_context.mjs";
import { youtube_innertube_key } from "./youtube_innertube_key.mjs";
export async function youtube_innertube_player(video_id) {
  "What youtube tells a player about one video when it is about to show it: the title, how long it runs, how many have watched, what the singer wrote under it, and which written-out versions of the words it has.";
  "Nobody is signed in here, so this only ever sees what anybody with the address would see, and it cannot change anything. The playlist reader next door asks a different address for a different kind of thing; a video is not a list, so it is asked for separately rather than by widening that one.";
  arguments_assert(arguments, 1);
  let key = youtube_innertube_key();
  let url =
    "https://www.youtube.com/youtubei/v1/player?prettyPrint=false&key=" + key;
  let context = youtube_innertube_context();
  let body = {
    context: context,
    videoId: video_id,
  };
  let options_extra = {
    headers: {
      "Content-Type": "application/json",
    },
    sleep: false,
  };
  let buffer = await http_post_options(url, body, options_extra);
  let answer = buffer_to_json(buffer);
  return answer;
}
