import { property_get } from "./property_get.mjs";
import { property_list_get } from "./property_list_get.mjs";
import { list_get } from "./list_get.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { property_set } from "./property_set.mjs";
import { each_index } from "./each_index.mjs";
import { each } from "./each.mjs";
export function gloss_passages_verse_word_keys(
  passages,
  text_index,
  word_keys_read,
) {
  "Each verse number of a chapter beside every key its words answer to, each word reduced to the keys two spellings of the same thing share.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs. A store glossing the original language and a store glossing a translation both live in this shape, so which text is the one under explanation is asked for rather than assumed.";
  "How loosely two words count as the same is the caller's to decide, which is why the keys are read by a lambda rather than worked out here. A caller with no dictionary can put the word in small letters and match spellings; a caller holding one can give the root, and then a verb and the noun built from it answer to the same key. Neither is right for both languages, and putting the choice here would settle it for whoever came second.";
  "★ ONE VERSE IS ONE FLAT LIST OF KEYS, NOT A LIST OF WORDS EACH HOLDING ITS OWN. A word can honestly answer to more than one key - a Hebrew shape belonging to two dictionary entries is the case this was built for - and the only question ever asked of this shape is whether a verse holds a key at all. Flattened, that stays the one question it always was; kept nested, every asker would have had to walk the words to ask it, and three separate readings would have grown the same walk.";
  "A word that comes back with no keys puts nothing in. That is the reader saying there was nothing here to key, and a verse is not made to hold an empty key that any other empty key would then match.";
  "The cutting is the one the gathering used, so a word looked up in here is looked for in the spelling the explanations were written against. Cut differently, a word standing either side of a dash would be looked for as a spelling the verse never holds.";
  let verse_keys = {};
  function passage_read(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let explained_texts = property_list_get(passage, "texts", text_index);
    function verse_read(verse_number, index) {
      let text = list_get(explained_texts, index);
      let bare = text_punctuation_dash_kept_split(text);
      let keys = list_map_concat_multiple(bare, word_keys_read);
      property_set(verse_keys, verse_number, keys);
    }
    each_index(verse_numbers, verse_read);
  }
  each(passages, passage_read);
  return verse_keys;
}
