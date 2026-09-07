import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_first } from "./list_first.mjs";
export function binisaya_words_known_get_folded(known, folded_index, word) {
  "What the gathered Cebuano dictionary holds about one word, found also where it holds the word under one of the other spellings Cebuano gives it.";
  "The dictionary is asked for the word as written first, so a word it holds is answered with exactly what it always answered with. Only a word it says nothing about is asked for a second time, and nothing that was found before is found differently.";
  "The second asking is what the rest of this reading already assumes. Roots are compared folded everywhere they are compared at all, because o and u are one sound and d, l and r are one another - and then the dictionary is searched letter for letter, so a root written sal-an where the dictionary wrote sad-an comes back as a word nobody has ever looked up. Measured over the sightings gathered so far, thirty one of them fall in that hole: the dictionary has the answer and was never asked in a spelling it recognises.";
  "Where the folded form belongs to more than one word, nothing is answered. Folding is a way of not seeing a difference, so it can land on two words that really are different, and there is nothing here that could tell that from one word spelled twice. Guessing would be right often and quietly wrong the rest of the time, which is worse than the silence it replaces.";
  "Two spellings of one word are not two words. Capitals and dashes are already read as nothing by the bare form, so the spellings are counted after that is taken off - otherwise Igsoon beside igsoon would read as an ambiguity and refuse an answer the dictionary plainly has.";
  "The bare form settles how many words are in hand and is never asked for. It has the dashes taken out of it, and the dictionary is keyed by the spelling as gathered, so asking it for sadan where the key is sad-an finds nothing. What is asked for is a spelling the dictionary really holds.";
  "$plain known";
  "$plain folded_index";
  "$plain word";
  "the first names a gathered dictionary, the second the same dictionary gathered under folded spellings, the third a word to ask about. None of them names anything that runs.";
  arguments_assert(arguments, 3);
  let held = binisaya_words_known_get(known, word);
  let missing = null_is(held);
  if (not(missing)) {
    return held;
  }
  let folded = gloss_word_folded(word);
  let spellings = property_get_or_null(folded_index, folded);
  let none = null_is(spellings);
  if (none) {
    return null;
  }
  let bare = list_map(spellings, gloss_word_bare);
  let distinct = list_unique(bare);
  let alone = list_size_equal(distinct, 1);
  if (not(alone)) {
    return null;
  }
  let spelled = list_first(spellings);
  let otherwise = binisaya_words_known_get(known, spelled);
  return otherwise;
}
