import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_browse } from "./youtube_innertube_browse.mjs";
export async function youtube_innertube_browse_id_params(browse_id, params) {
  "The whole of what youtube sends back when it is asked about one thing and told which of that thing's pages is wanted.";
  "A channel answers to one word for all of its pages, and which page is meant rides alongside in a second word youtube itself writes. Both are plain words, so this is the whole question in the form a person can type at a command line.";
  arguments_assert(arguments, 2);
  let answer = await youtube_innertube_browse({
    browseId: browse_id,
    params: params,
  });
  return answer;
}
