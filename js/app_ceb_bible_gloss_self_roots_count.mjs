import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_self_roots } from "./gloss_chapters_self_roots.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_self_roots_count() {
  "How many Cebuano explanations across the whole store give their own word as the root it is built from, and how many chapters they are spread over.";
  "The count is what says whether this is worth acting on. A handful over two hundred chapters is a thing to fix by hand; thousands is a thing to fix in the wording that produced them, and the two cost very different amounts, so the number is asked for before either is chosen.";
  "The findings themselves are not carried back. There are potentially thousands of them and a count is what the question was, so whoever wants to read the prose asks a single chapter for it.";
  let offenders = await gloss_chapters_self_roots(app_ceb_bible_gloss_generate);
  let chapters = list_size(offenders);
  function chapter_count(chapter) {
    let found = property_get(chapter, "found");
    let size = list_size(found);
    return size;
  }
  let sizes = list_map(offenders, chapter_count);
  let count = list_sum(sizes);
  let r = {
    chapters,
    count,
  };
  return r;
}
