import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
export function gloss_passages_verse_words(passages, text_index) {
  "Each verse number of a chapter beside the words that verse is written with, cut at their punctuation and put in small letters.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs. A store glossing the original language and a store glossing a translation both live in this shape, so which text is the one under explanation is asked for rather than assumed.";
  "The cutting is the one the gathering used, so a word looked up in here is looked for in the spelling the explanations were written against. Cut differently, a word standing either side of a dash would be looked for as a spelling the verse never holds.";
  "Small letters on both sides is what lets a word opening a sentence be found in the middle of another one, which is the whole reason a claim about a word is worth checking against a verse at all.";
  let verse_words = {};
  function passage_read(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let texts = property_get(passage, "texts");
    let explained_texts = list_get(texts, text_index);
    function verse_read(verse_number, index) {
      let text = list_get(explained_texts, index);
      let bare = text_punctuation_dash_kept_split(text);
      let lowered = list_map(bare, text_lower_to);
      property_set(verse_words, verse_number, lowered);
    }
    each_index(verse_numbers, verse_read);
  }
  each(passages, passage_read);
  return verse_words;
}
