import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { ebible_versions_readaloud_missing } from "./ebible_versions_readaloud_missing.mjs";
import { ebible_versions_english_readaloud_baseline_path } from "./ebible_versions_english_readaloud_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_versions_english_readaloud_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every English bible the search index walks has its read-aloud edition on this disk.");
  ("The index cuts each chapter into verses out of the read-aloud text, so a bible without one carries not one word into it. Nothing anywhere said so: the walk opened all eleven hundred and eighty-nine chapters of the World English Bible, had nothing to lay against the marks on their pages, and passed over every one. From outside that is indistinguishable from a bible that disagrees about numbering everywhere, and it was read as exactly that for a while.");
  ("Twenty-seven of the fifty-three were in that state at once, which is most of the reason this is watched rather than remembered. They were never asked for: what fetches read-aloud walks the bibles this repo ships, and one English bible is in that list, so the rest were only ever fetched by somebody naming them. Two lists that have to agree and nothing making them - the gap does not announce itself, so something has to go looking.");
  ("Read off the disk rather than measured, so it costs nothing and can sit among gates that must stay quick.");
  ("Measured against what the repo already carried rather than against zero, and it carries nothing, so today the two are the same thing. They come apart if eBible ever offers an English bible with no read-aloud edition beside it - no fetch would mend that, and a gate with no reachable remedy is one somebody eventually turns off.");
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let missing = await ebible_versions_readaloud_missing(bible_folders);
  let path = ebible_versions_english_readaloud_baseline_path();
  let f_name = fn_name("ebible_versions_english_readaloud_download");
  let write = fn_name("ebible_versions_english_readaloud_baseline_write");
  let hint = text_combine_multiple([
    "this English bible has no read-aloud edition on this disk, so the search index walks every chapter of it and takes nothing, and says nothing about it. Fetch what is missing with ",
    f_name,
    ", which finds its own set and leaves alone what is already here",
  ]);
  await baseline_names_gate_generic(missing, path, hint, write);
  let r = {
    offered: list_size(bible_folders),
    missing: list_size(missing),
  };
  return r;
}
