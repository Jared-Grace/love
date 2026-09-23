import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_explains_repeated_groups } from "./gloss_chapter_explains_repeated_groups.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { gloss_chapters_groups_ranked } from "./gloss_chapters_groups_ranked.mjs";
export async function gloss_chapters_explains_repeated_ranked(fn) {
  "Every wording one gloss store hands to more than one word in a chapter, ranked by how many words are on it across the whole store, each carried beside how many chapters it turns up in and a few of the words wearing it.";
  "This is the reading that says whether a store's repetition is one shape or thousands. A share on its own cannot tell a store where forty sentences cover half the words from a store where the same fraction is spread over forty thousand, and the two want opposite work - the first is an afternoon's rewriting, the second is a different way of writing glosses.";
  "What it counts is repetition inside a chapter, which is the right question for somebody sitting down to mend one and the wrong one for somebody choosing what to write next: a wording used once in each of two hundred chapters is invisible here. The twin that keeps those asks the same ranking of a wider gathering, and the ranking itself is written once, next door.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let groups_found = await gloss_chapter_explains_repeated_groups(
      chapter_code,
      fn,
    );
    return groups_found;
  }
  let per_chapter = await list_map_async(chapter_codes, chapter_read);
  let r = gloss_chapters_groups_ranked(chapter_codes, per_chapter);
  return r;
}
