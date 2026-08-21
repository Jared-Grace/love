import { words_early_reader } from "./words_early_reader.mjs";
import { words_letters_lowered } from "./words_letters_lowered.mjs";
import { word_early_reader_known_is } from "./word_early_reader_known_is.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function words_early_reader_outside(text) {
  "$plain text";
  "Every word in some written text that a child of the settled reading age would not already have, each one named once, in the order the text first says it.";
  "IT NAMES THE WORDS AND DECIDES NOTHING, which is the whole of what it is for. A caller wanting a gate can fail on a non-empty answer, a caller wanting a report can print it, and a caller writing text can ask before it writes rather than after. None of those judgements belongs here, because the same answer is the right one for all three.";
  "IT IS THE CHECK AN EXPLANATION OWES. A word is explained to somebody who does not have it, so an explanation reaching for words they also do not have has explained nothing and asked them to look up two words instead of one. That failure is invisible to whoever wrote it - the writer has every word in the sentence - and it is exactly what this makes visible.";
  "THE WORD BEING EXPLAINED IS NOT EXEMPTED HERE, and a caller glossing a word has to drop it themselves. An explanation of wool may fairly say wool, but this function is handed text and not a heading, so it cannot know which word is the one being explained without being told - and a parameter naming it would be dead weight for every caller that is not glossing anything.";
  "ONCE EACH rather than once per occurrence, because a reader given the same word three times reads it three times and learns nothing on the second. Counts are for the rarity reports, which are asking a different question.";
  let known_words = await words_early_reader();
  let words = words_letters_lowered(text);
  let outside = [];
  let met = {};
  for (let word of words) {
    let already = word_early_reader_known_is(word, known_words);
    if (already) {
      continue;
    }
    let seen = property_or_null(met, word);
    let first = equal(seen, null);
    if (first) {
      met[word] = true;
      list_add(outside, word);
    }
  }
  return outside;
}
