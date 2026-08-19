import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_browse } from "./youtube_innertube_browse.mjs";
export async function youtube_innertube_browse_id(browse_id) {
  "The whole of what youtube sends back when it is asked about one thing by the word it knows that thing by.";
  "The reading underneath takes a shape rather than a word, so it cannot be asked for from a command line, where every argument arrives as a word. This is that one question in the form a person can type, and it hands the answer back whole and unpicked so a reader can see what youtube really said rather than what a reader of it decided to keep.";
  arguments_assert(arguments, 1);
  let answer = await youtube_innertube_browse({
    browseId: browse_id,
  });
  return answer;
}
