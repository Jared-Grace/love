import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_roots_claimed } from "./gloss_entries_roots_claimed.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { lists_combine_unique } from "./lists_combine_unique.mjs";
export async function gloss_chapters_roots_claimed_distinct(fn) {
  "Every different root a whole gloss store's explanations name in so many words, each counted once.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is counted from the moment it is written.";
  "A root named here is a claim somebody wrote down and a reader is shown, which is what separates it from a root an outside dictionary supplied. The two are worth holding apart: a dictionary's answer costs a lookup to be wrong, and a claim in an explanation costs a reader believing it.";
  "$plain fn";
  "the function names a gloss store and is looked up for its own name only; nothing here calls it.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let roots = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      gloss_entries_roots_claimed,
    );
    return roots;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  let distinct = lists_combine_unique(chapters);
  return distinct;
}
