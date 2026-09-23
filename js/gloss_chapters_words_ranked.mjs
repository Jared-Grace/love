import { gloss_chapters_groups_gathered } from "./gloss_chapters_groups_gathered.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_chapters_groups_words_ranked } from "./gloss_chapters_groups_words_ranked.mjs";
export async function gloss_chapters_words_ranked(fn) {
  "Every English word one gloss store has written an explanation for, beside all the different wordings its entries carry, the busiest word first.";
  "This is the reading to ask when the question is what is still unfinished rather than what is heavy. A word carrying one wording everywhere is done; a word carrying nine is nine decisions nobody has made, and the nine are printed side by side so the decision can be made by reading them rather than by remembering them.";
  let gathered = await gloss_chapters_groups_gathered(fn);
  let chapter_codes = property_get(gathered, "chapter_codes");
  let per_chapter = property_get(gathered, "per_chapter");
  let r = gloss_chapters_groups_words_ranked(chapter_codes, per_chapter);
  return r;
}
