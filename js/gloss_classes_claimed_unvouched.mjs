import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known_roots_named } from "./binisaya_words_known_roots_named.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function gloss_classes_claimed_unvouched(classes, known) {
  "The classes where the root an explanation named is a word nothing in the dictionary vouches for, most-seen first: the explanations most likely to have named something that is not a word.";
  "The dictionary answers about the claimed root with four fields, three of them empty, and writes exactly that both for a word it holds without a breakdown and for a word it has never had. So being held says only that the app asked, and an explanation naming a run of letters nobody speaks reads the same as one naming a common root.";
  "Being named as somebody's root is the one thing in the stored data the site alone could have written, and it separates them from one side. A claim the dictionary vouches for is a real word whatever else is wrong with the explanation. A claim it does not vouch for is where a made-up root would be if there is one.";
  "This suspects and never convicts. Most roots are never named by anything, so a claim can be perfectly good Cebuano and still land here. What makes the list worth reading anyway is that a made-up root cannot avoid landing here - the answer is one-sided in the direction that matters, and it is short enough to read.";
  "A claim the dictionary took apart is left out even when nothing names it, because the site having written a breakdown for the word is itself the site vouching for it - more directly than any other entry naming it could.";
  "A claim nobody has asked the dictionary about is left out too, and that is the one exclusion worth arguing with. Nothing is known about those either way, and putting them here would fill a list of suspects with words whose only fault is that no verse used them bare. They belong with the unasked, which is counted elsewhere.";
  "$plain classes";
  "$plain known";
  "the first names gathered classes, the second a gathered dictionary. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let vouched = binisaya_words_known_roots_named(known);
  function unvouched_is(one_class) {
    let claimed = property_get(one_class, "claimed");
    let bare = gloss_word_bare(claimed);
    let entry = binisaya_words_known_get(known, bare);
    let unasked = null_is(entry);
    if (unasked) {
      return false;
    }
    let analysed = property_get_or_null(entry, "analysed");
    if (analysed) {
      return false;
    }
    let key = gloss_word_folded(bare);
    let named = property_get_or_null(vouched, key);
    let r = null_is(named);
    return r;
  }
  let picked = list_filter(classes, unvouched_is);
  function class_count(one_class) {
    let count = property_get(one_class, "count");
    return count;
  }
  let ranked = list_sort_number_mapper_reverse(picked, class_count);
  return ranked;
}
