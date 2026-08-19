import { ebible_readaloud_lines_offered_unchecked_names } from "./ebible_readaloud_lines_offered_unchecked_names.mjs";
import { ebible_readaloud_lines_offered_unchecked_baseline_path } from "./ebible_readaloud_lines_offered_unchecked_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function ebible_readaloud_lines_offered_unchecked_baseline_write() {
  "Rewrite the record of bibles known to be offered without a chapter of them having been read, from what the measurement says right now.";
  "For seeding it once, and for shrinking it after a bible's reading-aloud text has been fetched and the measuring done again. Never for blessing a new one: a bible in here is a bible a reader can choose whose chapters nobody has compared to anything, so the list growing means more of what is offered resting on nobody having looked.";
  "The measuring itself is a separate command and takes the better part of an hour. Run that first, or this records what was true whenever it was last run.";
  let known = await ebible_readaloud_lines_offered_unchecked_names();
  let path = ebible_readaloud_lines_offered_unchecked_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this bible is offered to readers and no chapter of it has been read, and it was not like that before - fetch what is missing for it rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
