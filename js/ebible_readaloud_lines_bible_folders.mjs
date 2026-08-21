import { ebible_readaloud_bible_folders } from "./ebible_readaloud_bible_folders.mjs";
import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
export async function ebible_readaloud_lines_bible_folders() {
  "Every bible the lines-against-marks record is about: the ones this repo ships, joined with the English ones the search index walks.";
  "Two different things rest on a chapter's spoken lines matching the verse marks on its page, and they do not read the same bibles. One is what this repo ships, where a single bible is English. The other is the search index, which cuts fifty-three English bibles into verses by exactly this rule. A chapter failing the rule is dropped from the index in silence, so leaving those fifty-two unmeasured meant the one measuring that would have named it was looking elsewhere.";
  "Kept as one function because the measuring and the checking both need this answer, and they need the same one. The measuring walks these bibles and the checking refuses a record that does not name them, so the two lists disagreeing does not read as a disagreement - it reads as a record that is stale, or as bibles that were never asked about. That is the same shape of fault that hid twenty-seven whole bibles from the index: two lists that had to agree, and nothing making them. One name is what makes them.";
  let shipped = ebible_readaloud_bible_folders();
  let english = await ebible_versions_english_downloadable_cache();
  let bible_folders = list_concat_unique(shipped, english);
  return bible_folders;
}
