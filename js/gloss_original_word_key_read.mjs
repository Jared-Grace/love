import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function gloss_original_word_key_read(strongs) {
  "The reader that keys the Hebrew and Greek words of a gloss store by their dictionary entry, so that two forms of one word are met as one.";
  "$plain strongs";
  "This is the original-language answer to the question the Cebuano and Urdu stores answered for themselves. Cebuano folds capitals and matches spellings, which is enough for a language whose words barely move; Urdu asks for the English root, because the words that store teaches are English ones. Hebrew and Greek words change their ending almost every time they are used, so neither of those two answers reaches them.";
  "A spelling the interlinear knows no number for is keyed by itself, folded. That is exactly what the store did before this reader existed, so a word outside the interlinear is no worse off than it was, and a word inside it is met by what it means rather than by how it happens to be spelled here.";
  "A number and a folded spelling can never be taken for each other, because one is written in digits and the other in Hebrew or Greek letters, so the two kinds of key share no answer.";
  arguments_assert(arguments, 1);
  function key_read(word) {
    let folded = text_lower_to(word);
    let strong = property_get_or_null(strongs, folded);
    if (null_is(strong)) {
      return folded;
    }
    return strong;
  }
  return key_read;
}
