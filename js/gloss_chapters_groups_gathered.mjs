import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_explains_groups } from "./gloss_chapter_explains_groups.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function gloss_chapters_groups_gathered(fn) {
  "Every authored chapter one gloss store holds, read once, handed back as the chapter names beside the explanation groups found in each of them.";
  "Two readings want exactly this and nothing else before they differ: one ranks the wordings, the other ranks the words wearing them. Reading the store is the slow half of both - two hundred and sixty files - and the half that has to agree between them, because a ranking of wordings and a ranking of words are only comparable if they were taken from the same pass over the same folder.";
  "The chapter names travel back alongside rather than being counted here, because a ranking reports how many chapters it crossed and that number has to be the folder's, not a total recomputed from groups that may have skipped an empty chapter.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let groups_found = await gloss_chapter_explains_groups(chapter_code, fn);
    return groups_found;
  }
  let per_chapter = await list_map_async(chapter_codes, chapter_read);
  let r = {
    chapter_codes,
    per_chapter,
  };
  return r;
}
