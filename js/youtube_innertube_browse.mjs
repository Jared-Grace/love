import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_innertube_ask } from "./youtube_innertube_ask.mjs";
export async function youtube_innertube_browse(ask) {
  "One question put to the same private address youtube's own pages ask when they walk a list, answered as the reading youtube sent back.";
  "Nobody is signed in here, so this only ever sees what a stranger with the address would see. That is enough for a public playlist and is deliberately not enough for anything else: a change to somebody's channel cannot be made by accident from a reader.";
  arguments_assert(arguments, 1);
  let answer = await youtube_innertube_ask("browse", ask);
  return answer;
}
