import { arguments_assert } from "./arguments_assert.mjs";
export function object_words_to_list(words) {
  "Every key of a table keyed by words, each paired with its value, as a list of key and value.";
  "A table of words can hold a key every ordinary record already answers to - the bibles say constructor - so the table hands over its own pairs of key and value whole, and no key is ever used to reach into it - neither through the getter that refuses those names, nor by brackets that would reach past the table into the language.";
  "Only the table's own keys are read, so a name it merely inherits never comes back as a word.";
  arguments_assert(arguments, 1);
  let pairs = Object.entries(words);
  function entry([key, value]) {
    let pair = {
      key,
      value,
    };
    return pair;
  }
  let list = pairs.map(entry);
  return list;
}
