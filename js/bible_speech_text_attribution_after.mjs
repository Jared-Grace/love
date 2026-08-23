import { arguments_assert } from "./arguments_assert.mjs";
import { bible_speech_narration_words } from "./bible_speech_narration_words.mjs";
import { bible_speech_words_attribution } from "./bible_speech_words_attribution.mjs";
export function bible_speech_text_attribution_after(text) {
  "The speaking verb found near the START of the narration that follows a quotation, or null where there is none - the case where the speaker is named after the words rather than before them.";
  "★ THE FIRST WORDS ARE THE ONES THAT COUNT HERE, WHICH IS THE MIRROR OF THE OTHER SIDE AND FOR THE SAME REASON. Jesus said stands immediately past the closing mark and everything after it is the next sentence, so a search running further on would start crediting a quotation to whatever happened next.";
  arguments_assert(arguments, 1);
  let words = bible_speech_narration_words(text);
  let head = words.slice(0, 12);
  let found = bible_speech_words_attribution(head);
  return found;
}
