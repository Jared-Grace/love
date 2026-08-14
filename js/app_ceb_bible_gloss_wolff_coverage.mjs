import { app_ceb_bible_gloss_words_owed } from "./app_ceb_bible_gloss_words_owed.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { property_get } from "./property_get.mjs";
import { wolff_owed_word_find } from "./wolff_owed_word_find.mjs";
export async function app_ceb_bible_gloss_wolff_coverage() {
  "How far Wolff's dictionary reaches into the Cebuano words still owed an explanation - how many it answers as the word itself, how many only through the root, how many it does not reach at all, and which of the unreached ones are commonest.";
  "A dictionary is worth wiring into the writing exactly as far as it answers the words actually waiting, and that is a number rather than an impression. Counting the three ways separately is what makes the number honest: an answer through the root is a smaller answer than an answer on the word, because it says what the word was built from and not what the word means.";
  "The commonest unreached words are carried out with the counts because they are the worklist the next piece of work comes from. A count alone says how much is missing and nothing about what, and the words appearing in the most places are where any further reach buys the most.";
  let owed = await app_ceb_bible_gloss_words_owed();
  let found = await list_map_async(owed, wolff_owed_word_find);
  let by_word = list_filter_property(found, "by", "word");
  let by_root = list_filter_property(found, "by", "root");
  let by_none = list_filter_property(found, "by", "none");
  let commonest = list_take(by_none, 40);
  function word_read(item) {
    let word = property_get(item, "word");
    return word;
  }
  let missing = list_map(commonest, word_read);
  let r = {
    owed: list_size(owed),
    word: list_size(by_word),
    root: list_size(by_root),
    none: list_size(by_none),
    missing,
  };
  return r;
}
