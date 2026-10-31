import { object_property_names } from "./object_property_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function object_words_to_list(words) {
  "Every key of a table keyed by words, each paired with its value, as a list of key and value.";
  "A table of words can hold a key every ordinary record already answers to - the bibles say constructor - so the keys are asked of the table itself and read by plain indexing, never through the getter that refuses those names.";
  "Only the table's own keys are read, so a name it merely inherits never comes back as a word.";
  arguments_assert(arguments, 1);
  let keys = object_property_names(words);
  function entry(key) {
    let value = words[key];
    let pair = {
      key,
      value,
    };
    return pair;
  }
  let list = keys.map(entry);
  return list;
}
