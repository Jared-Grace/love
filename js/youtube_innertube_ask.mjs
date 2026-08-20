import { arguments_assert } from "./arguments_assert.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { youtube_innertube_context } from "./youtube_innertube_context.mjs";
import { youtube_innertube_key } from "./youtube_innertube_key.mjs";
export async function youtube_innertube_ask(name, ask) {
  "$plain name";
  "One question put to the private address youtube's own pages ask, named by the last word of that address, answered as the reading youtube sent back.";
  "Nobody is signed in here, so this only ever sees what a stranger with the address would see. That is enough for a public playlist and for a public video, and is deliberately not enough for anything else: nothing on somebody's channel can be changed by accident from a reader.";
  "WHO YOU ARE IS ADDED HERE AND NOT BY THE CALLER, because youtube refuses a question that does not carry it, and a caller that has to remember to attach it is a caller that will one day not.";
  "THE QUESTION IS COPIED INTO A NEW BODY RATHER THAN ADDED TO, so a caller handing the same question in twice gets the same question asked twice rather than one that has quietly grown.";
  arguments_assert(arguments, 2);
  let key = youtube_innertube_key();
  let url =
    "https://www.youtube.com/youtubei/v1/" +
    name +
    "?prettyPrint=false&key=" +
    key;
  let body = {};
  object_merge_set(body, ask);
  let context = youtube_innertube_context();
  object_merge_set(body, {
    context: context,
  });
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
