import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapters_affix_kinds_wrong } from "./gloss_chapters_affix_kinds_wrong.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_list_size } from "./property_list_size.mjs";
export async function app_ceb_bible_gloss_affix_kinds_wrong_count() {
  "How many Cebuano explanations across the whole store call a piece of their word by a name the dictionary gives no piece of, and how many chapters they are spread over.";
  "This is the measure a rewrite of the whole store is judged by. The wording it was written to answer was changed for one reason - the explanations were naming a prefix where the dictionary gives an infix - so the number this returns before and after is the whole account of whether the money bought anything.";
  "The number of words consulted comes back beside it, because two counts taken from the same store only compare when the dictionary behind them was the same size both times. A gathering job runs for hours alongside this and grows it, and a fall in findings would then be partly its doing rather than the rewrite's.";
  "The findings themselves are not carried back. A count is what the question was, and whoever wants to read the prose asks a single chapter for it.";
  let known = await binisaya_words_known();
  let list = object_property_names(known);
  let consulted = list_size(list);
  let offenders = await gloss_chapters_affix_kinds_wrong(
    app_ceb_bible_gloss_generate,
    known,
  );
  let chapters = list_size(offenders);
  function chapter_count(chapter) {
    let size = property_list_size(chapter, "found");
    return size;
  }
  let count = list_map_sum(offenders, chapter_count);
  let r = {
    consulted,
    chapters,
    count,
  };
  return r;
}
