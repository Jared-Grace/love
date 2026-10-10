export function object_words_new() {
  "An empty record that can be keyed by any word at all, including the few words every ordinary record already answers to.";
  "An ordinary record inherits constructor and __proto__ from the language, so a table of every word in the repo reads constructor as a function nobody stored, and writing __proto__ into it swaps out the record's own parent rather than storing anything. This one has no parent, so those words are plain keys like any other and lead nowhere.";
  "That is also why the getting and setting functions let those words through on a record like this one and refuse them on any other.";
  let words = Object.create(null);
  return words;
}
