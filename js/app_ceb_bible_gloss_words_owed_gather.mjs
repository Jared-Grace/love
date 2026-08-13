import { app_ceb_bible_gloss_words_owed } from "./app_ceb_bible_gloss_words_owed.mjs";
import { binisaya_words_gather } from "./binisaya_words_gather.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_words_owed_gather() {
  "Look up on binisaya.com only the Cebuano words that are still owed an explanation and have never been asked about, and answer with how it went.";
  "The whole-store sweep asks about every word the store explains, which is thousands of them and most of a day, and nearly all of that work is already done. The words that are actually holding up an explanation are the last hundred or so, and asking for those alone is the difference between a day and a few minutes.";
  "It finds its own list rather than being handed one, so it can be run again after a batch of explanations is written and will ask about exactly whatever is left. A word that has been asked about already is not asked again even if the dictionary had nothing to say, because the silence is the answer and asking twice would not change it.";
  let owed = await app_ceb_bible_gloss_words_owed();
  function unasked_is(item) {
    let unasked = property_get(item, "unasked");
    return unasked;
  }
  let words = list_filter_map_property(owed, unasked_is, "word");
  let r = await binisaya_words_gather(words);
  return r;
}
