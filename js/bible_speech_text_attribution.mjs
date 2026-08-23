import { arguments_assert } from "./arguments_assert.mjs";
import { bible_speech_narration_words } from "./bible_speech_narration_words.mjs";
import { bible_speech_words_attribution } from "./bible_speech_words_attribution.mjs";
export function bible_speech_text_attribution(text) {
  "The speaking verb found near the END of a run of narration, or null where there is none - the case where a quotation is introduced by the sentence in front of it.";
  "★ ONLY THE TAIL OF THE NARRATION IS LOOKED AT, BECAUSE ATTRIBUTION IS ADJACENT TO THE SPEECH AND ANYTHING FURTHER BACK IS COINCIDENCE. Mark 7 has a verse reading Jesus ordered them not to tell anyone, followed later by unrelated speech; a search over the whole run would credit that speech to the earlier order. Twelve words is about a clause, which is the distance a real attribution actually sits at.";
  arguments_assert(arguments, 1);
  let words = bible_speech_narration_words(text);
  let tail = words.slice(-12);
  let found = bible_speech_words_attribution(tail);
  return found;
}
