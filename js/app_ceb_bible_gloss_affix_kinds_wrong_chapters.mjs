import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapters_affix_kinds_wrong } from "./gloss_chapters_affix_kinds_wrong.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_size } from "./property_list_size.mjs";
export async function app_ceb_bible_gloss_affix_kinds_wrong_chapters() {
  "Every Cebuano chapter whose explanations call a piece of a word by a name the dictionary gives no piece of, worst first, with how many each holds.";
  "The count over the whole store answers whether the store is getting better. This answers which chapter to sit down with, which is a different question and the one somebody about to do the work is asking.";
  "The findings themselves are left behind and only their number is carried, because a whole store's prose is more than anybody reads at once. A single chapter hands over its own findings when it is chosen.";
  let known = await binisaya_words_known();
  let offenders = await gloss_chapters_affix_kinds_wrong(
    app_ceb_bible_gloss_generate,
    known,
  );
  function chapter_count(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let count = property_list_size(chapter, "found");
    let r = {
      chapter_code,
      count,
    };
    return r;
  }
  let counted = list_map(offenders, chapter_count);
  function count_of(chapter) {
    let count = property_get(chapter, "count");
    return count;
  }
  let r2 = list_sort_number_mapper_reverse(counted, count_of);
  return r2;
}
