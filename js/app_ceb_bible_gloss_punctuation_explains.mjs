import { app_ceb_bible_gloss_explains } from "./app_ceb_bible_gloss_explains.mjs";
import { app_ceb_bible_gloss_words_owed } from "./app_ceb_bible_gloss_words_owed.mjs";
import { each } from "./each.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_punctuation_removed } from "./text_punctuation_removed.mjs";
export async function app_ceb_bible_gloss_punctuation_explains() {
  "The wording to give a Cebuano word that reached the gloss still wearing a quote mark or a comma, borrowed from the same word written bare.";
  "A word met at the head of a sentence or at the end of one arrives with the punctuation stuck to it, and the gloss keys itself by exactly what the reader sees, so that spelling is a word of its own and has no explanation. It needs none written for it: the reader is looking at a word this repo has already settled wording for, and the mark is where the word fell rather than anything about the word.";
  "It is derived rather than listed, so a passage authored later that ends a sentence on an already-explained word is covered without anything being typed. A word whose bare spelling has no wording yet is passed over here - that is a word owed a real explanation, and borrowing nothing is how it stays visible as one.";
  "Stripping the marks is not enough on its own to say two spellings mean the same thing, and it does not have to be: the explanation being borrowed says what kind of word it is and what it carries, and neither of those is changed by a comma.";
  let explains = app_ceb_bible_gloss_explains();
  let owed = await app_ceb_bible_gloss_words_owed();
  let r = {};
  function owed_read(item) {
    let word = property_get(item, "word");
    let bare = text_punctuation_removed(word);
    let settled = property_exists(explains, bare);
    if (settled) {
      let explain = property_get(explains, bare);
      property_set(r, word, explain);
    }
  }
  each(owed, owed_read);
  return r;
}
