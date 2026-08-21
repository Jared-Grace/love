import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { ebible_versions_readaloud_missing } from "./ebible_versions_readaloud_missing.mjs";
import { ebible_versions_english_readaloud_baseline_path } from "./ebible_versions_english_readaloud_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function ebible_versions_english_readaloud_baseline_write() {
  "Rewrite the record of English bibles known to have no read-aloud edition on this disk, from what the disk says right now.";
  "For seeding it once, and for shrinking it after the fetching has been done. Growing it is what it is not for: a name entering this list is a bible the search index walks and takes not one word out of, and it does that in silence, so a list that grows is the search getting quietly narrower.";
  "The remedy is one command and it is nearly always the right answer, so reach for that first. This is for the case that command cannot mend - a bible upstream offers with no read-aloud edition published beside it, which no amount of fetching will produce.";
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let known = await ebible_versions_readaloud_missing(bible_folders);
  let path = ebible_versions_english_readaloud_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this English bible has no read-aloud edition on this disk, and it did not lack one before. Read aloud is how a chapter is cut into verses, so the search index walks that bible and takes nothing at all from it, without saying so. Fetch what is missing rather than recording it",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
