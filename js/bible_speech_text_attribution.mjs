import { bible_speech_colon_attribution } from "./bible_speech_colon_attribution.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_speech_narration_words } from "./bible_speech_narration_words.mjs";
import { bible_speech_words_attribution } from "./bible_speech_words_attribution.mjs";
export function bible_speech_text_attribution(text) {
  "What attributes the quotation that follows a run of narration - a speaking verb near the end of it, or a colon closing it - and null where neither is there.";
  "★ THE COLON IS ASKED ABOUT FIRST AND SHORT-CIRCUITS, BECAUSE IT IS EXACT WHERE THE VERB SEARCH IS A PROXY. A colon in that position means one thing; a verb within twelve words means probably. Where both are present the answer is the same either way, so nothing is lost by taking the certain one.";
  "★ ONLY THE TAIL OF THE NARRATION IS LOOKED AT, BECAUSE ATTRIBUTION IS ADJACENT TO THE SPEECH AND ANYTHING FURTHER BACK IS COINCIDENCE. Mark 7 has a verse reading Jesus ordered them not to tell anyone, followed later by unrelated speech; a search over the whole run would credit that speech to the earlier order. Twelve words is about a clause, which is the distance a real attribution actually sits at.";
  arguments_assert(arguments, 1);
  let colon = bible_speech_colon_attribution(text);
  if (colon) {
    let r = ":";
    return r;
  }
  let words = bible_speech_narration_words(text);
  let tail = words.slice(-12);
  let found = bible_speech_words_attribution(tail);
  return found;
}
