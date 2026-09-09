import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_entries_explain_rewrite_generic } from "./gloss_chapter_entries_explain_rewrite_generic.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
export async function gloss_chapters_entries_explain_rewrite_generic(
  fn,
  lambda$entry_is,
  lambda$explain_new,
) {
  "Writes a fresh explanation over every entry across one whole gloss store that answers to a given reading of an entry, and gives back how many chapters were read, how many words moved, and which words those were.";
  "Each chapter is read, judged and written on its own, so a run that fails part way through leaves whole chapters behind it rather than a store half in one state and half in another.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_rewrite(chapter_code) {
    let changes = await gloss_chapter_entries_explain_rewrite_generic(
      chapter_code,
      fn,
      lambda$entry_is,
      lambda$explain_new,
    );
    return changes;
  }
  let nested = await list_map_async(chapter_codes, chapter_rewrite);
  let changed = list_flat(nested);
  let r = {
    chapters: list_size(chapter_codes),
    rewritten: list_size(changed),
    words: list_unique(changed),
  };
  return r;
}
