import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function gloss_word_keys_reader_one(word_key_read) {
  "A reader that answers a word with every key it could be met under, made out of a reader that answers with one key.";
  "The stores that gloss a living language answer this question with a single key and are right to: a Cebuano word or an English one has one root, and the reader that finds it has nothing to be uncertain about. Only the original-language store has a word that honestly answers to two dictionary entries, because one Hebrew or Greek shape can belong to two of them and the shape alone cannot say which.";
  "So the shared reading asks everybody for a list, and the two certain stores say so with a list of one. That costs them nothing and it takes the uncertainty out of the shared code, where the alternative was a reader that sometimes answered with a key and sometimes with a list of them, and every caller having to tell which it had been given.";
  "A word that comes back with no key at all comes back here as no keys rather than as one empty key. An empty key is not a key - it is the reader saying there was nothing here to key - and a list is able to say that, where a single answer had to say it in a value that also reads as a key.";
  arguments_assert(arguments, 1);
  function word_keys_read(word) {
    let key = word_key_read(word);
    let nothing = text_empty_is(key);
    if (nothing) {
      let none = [];
      return none;
    }
    let one = [key];
    return one;
  }
  return word_keys_read;
}
