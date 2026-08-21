export function list_words_missing(words, other_words) {
  "The words of one list that the other list does not hold, each named once, in the order the first list says them.";
  "ONCE EACH, because a reader given the same word twice reads it twice and learns nothing the second time. A word that was said three times and is now said once has not left, and counting occurrences would report it as though it had.";
  let missing = [];
  let met = {};
  for (let word of words) {
    let there = list_includes(other_words, word);
    if (there) {
      continue;
    }
    let seen = property_or_null(met, word);
    let first = equal(seen, null);
    if (first) {
      met[word] = true;
      list_add(missing, word);
    }
  }
  return missing;
}
