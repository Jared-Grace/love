import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function binisaya_words_known_roots_named(known) {
  "Every word the dictionary itself names as the root of some other word, gathered under the folded spelling, so that a word can be asked whether the dictionary has ever vouched for it.";
  "The dictionary cannot be asked whether it holds a word. Its entries are stored parsed, and a page with no breakdown on it is stored exactly as a page for a word the site does not have - four fields, three of them empty. So holding an entry proves only that somebody asked, never that there was anything to find.";
  "Being named as somebody's root is different, and it is the one thing in the stored data that only the site could have written. Nothing the app asks for can put a word here. If the dictionary says one of its entries comes from this word, then the dictionary knows this word, whatever its own page for it looks like.";
  "It vouches and never refuses. A word missing from here may still be perfectly good Cebuano - most roots are never named by anything, because most words were never taken apart. What is here is proved, what is not here is unproved, and reading the second as disproof would turn a small true answer into a large false one.";
  "The spellings are folded because the dictionary writes the same root both ways, and a vouching that missed on a vowel would vouch for half the words it should.";
  "$plain known";
  "it names a gathered dictionary. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let named = {};
  let spellings = object_property_names(known);
  function entry_put(spelling) {
    let entry = property_get(known, spelling);
    let nothing = null_is(entry);
    if (nothing) {
      return;
    }
    let analysed = property_get_or_null(entry, "analysed");
    if (not(analysed)) {
      return;
    }
    let root = property_get_or_null(entry, "root");
    let unwritten = null_is(root);
    if (unwritten) {
      return;
    }
    let bare = gloss_word_bare(root);
    let blank = text_empty_is(bare);
    if (blank) {
      return;
    }
    let key = gloss_word_folded(bare);
    property_set(named, key, bare);
  }
  each(spellings, entry_put);
  return named;
}
