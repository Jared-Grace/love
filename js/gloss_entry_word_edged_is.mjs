import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_edged_is } from "./text_punctuation_edged_is.mjs";
export function gloss_entry_word_edged_is(entry) {
  "Whether the word one explanation is written about carries a mark from the sentence it was standing in - the quotation mark that opened the speech, the comma or full stop it ran into - welded onto its front or its back.";
  "These are not marks explained as words of their own, which is a different fault and has its own reader. The word is really there and really explained; it is the spelling that picked something up, because a person copying a verse out copies what they see.";
  "One reader serves both an authored entry and a finding written about one, because a finding carries the word under the same name the entry does. The alternative was two spellings of one question, which is the arrangement that lets a check and a repair quietly disagree about what they are looking for.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let word = property_get(entry, word_key);
  let edged = text_punctuation_edged_is(word);
  return edged;
}
