import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_explains_groups } from "./gloss_chapter_explains_groups.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { gloss_chapters_groups_ranked } from "./gloss_chapters_groups_ranked.mjs";
export async function gloss_chapters_explains_ranked(fn) {
  "Every wording one gloss store has written anywhere, ranked by how many words are on it across the whole store, each carried beside how many chapters it turns up in and a few of the words wearing it.";
  "The ranking next door counts a wording only where a second word in the same chapter was given it word for word, and that blinds it to a whole shape of repetition: a sentence handed to one word in each of two hundred chapters is two hundred entries and reads there as nothing at all. Measured on the English-to-Urdu store, one wording it showed as forty six was forty seven, and the missing one was the only entry of its kind in its chapter.";
  "So a reading meant to choose what to write next has to be this one. The other stays, because inside a single chapter a wording used once is not repetition and a person mending that chapter should not be shown it.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let groups_found = await gloss_chapter_explains_groups(chapter_code, fn);
    return groups_found;
  }
  let per_chapter = await list_map_async(chapter_codes, chapter_read);
  let r = gloss_chapters_groups_ranked(chapter_codes, per_chapter);
  return r;
}
