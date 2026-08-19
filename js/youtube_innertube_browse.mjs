import { arguments_assert } from "./arguments_assert.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { json_to } from "./json_to.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { youtube_innertube_context } from "./youtube_innertube_context.mjs";
export async function youtube_innertube_browse(ask) {
  "One question put to the same private address youtube's own pages ask, answered as the reading youtube sent back.";
  "Nobody is signed in here, so this only ever sees what a stranger with the address would see. That is enough for a public playlist and is deliberately not enough for anything else: a change to somebody's channel cannot be made by accident from a reader.";
  arguments_assert(arguments, 1);
  let url = "https://www.youtube.com/youtubei/v1/browse?prettyPrint=false";
  let body = {};
  object_merge_set(body, ask);
  let context = youtube_innertube_context();
  object_merge_set(body, { context: context });
  let text = json_to(body);
  let options_extra = {
    headers: { "Content-Type": "application/json" },
    sleep: false,
  };
  let buffer = await http_post_options(url, text, options_extra);
  let answer = buffer_to_json(buffer);
  return answer;
}
