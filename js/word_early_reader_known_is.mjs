import { word_early_reader_matched_or_null } from "./word_early_reader_matched_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
export function word_early_reader_known_is(word, known_words) {
  "Whether one word is reachable from a given list of words, counting the ordinary endings English adds to a word it already has.";
  "IT IS DELIBERATELY CRUDE and it is allowed to be, because of where its answer goes. Nothing here fails a build: a yes drops a line out of a report and a no leaves one in for somebody to read past. So the cost of being wrong is one line either way, and a rule somebody can hold in their head is worth more here than a rule that is right more often.";
  "THE WALK ITSELF IS NEXT DOOR NOW. This asked whether a word was reachable by doing the reaching itself, and then a tap needed the word it had reached rather than the yes - so the walk moved to the reader that answers WHICH word, and this became the question mark on the end of it. A boolean throws away the only thing a gloss could have been found by, which is why the two cannot be one function with a flag.";
  let matched = word_early_reader_matched_or_null(word, known_words);
  let found = not_equal(matched, null);
  return found;
}
