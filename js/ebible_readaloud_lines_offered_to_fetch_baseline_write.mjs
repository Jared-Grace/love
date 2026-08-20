import { ebible_readaloud_lines_offered_to_fetch_names } from "./ebible_readaloud_lines_offered_to_fetch_names.mjs";
import { ebible_readaloud_lines_offered_to_fetch_baseline_path } from "./ebible_readaloud_lines_offered_to_fetch_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function ebible_readaloud_lines_offered_to_fetch_baseline_write() {
  "Rewrite the record of bibles known to be offered with chapters of them unread, from what the measurement says right now.";
  "For seeding it once, and for shrinking it after a bible's reading-aloud text has been fetched and the measuring done again. Never for blessing a new one: a bible in here is a bible a reader can choose that has chapters nobody can read, so the list growing means more of what is offered being less than it looks.";
  "The measuring itself is a separate command and takes the better part of an hour. Run that first, or this records what was true whenever it was last run.";
  let known = await ebible_readaloud_lines_offered_to_fetch_names();
  let path = ebible_readaloud_lines_offered_to_fetch_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this bible is offered to readers and has chapters with no reading-aloud text, and it was not like that before. Has what is missing been fetched? A list that grows means more of what is offered resting on chapters nobody can read, which is why growing it is not what this command is for",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
