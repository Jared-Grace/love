import { each } from "./each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_speech_attribution_verbs } from "./bible_speech_attribution_verbs.mjs";
export function bible_speech_words_attribution(words) {
  "The speaking verb among a short run of words, or null where there is none.";
  "It takes words already chosen rather than a passage, because the run that matters differs by which side of the quotation it lies on - behind the opening mark the last words count, and past the closing mark the first ones do. Choosing the run is the caller's question; recognising the verb is this one's, and keeping them apart is what stops the recogniser being written twice.";
  "The last match wins, because where a run holds two candidates the later one sits nearer the speech in the case this was built for.";
  arguments_assert(arguments, 1);
  let verbs = bible_speech_attribution_verbs();
  let found = null;
  function word_each(word) {
    let is = list_includes(verbs, word);
    if (is) {
      found = word;
    }
  }
  each(words, word_each);
  return found;
}
