import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_heading_only_names } from "./ebible_readaloud_heading_only_names.mjs";
import { ebible_readaloud_heading_only_baseline_path } from "./ebible_readaloud_heading_only_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function ebible_readaloud_heading_only_baseline_write() {
  arguments_assert(arguments, 0);
  ("Rewrite the record of chapters known to be published for reading aloud as a heading and nothing else, from what the measurement says right now.");
  ("Growing this one is allowed, which is the opposite of every other ratchet here, and the reason is that a name arriving in it is not a fault anybody in this repo can put right. The words do not exist upstream; no amount of fetching will bring them. A list that refused to grow would go red and stay red on a chapter that is already as complete as it can ever be - which is exactly how this list came to be needed, so building the same trap again would be pointless.");
  ("What is being blessed, then, is not the chapter but the finding about it. Before recording a new name, prove it: delete the cached copy of that bible's reading-aloud text, fetch it again, and see whether the same two lines come back. If they do, the chapter is absent upstream and belongs here. If words come back instead, the earlier fetch was cut short and recording it would bury a download that half worked.");
  ("The measuring itself is a separate command and takes the better part of an hour. Run that first, or this records what was true whenever it was last run.");
  let known = await ebible_readaloud_heading_only_names();
  let path = ebible_readaloud_heading_only_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
