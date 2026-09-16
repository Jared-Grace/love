import { fn_name } from "./fn_name.mjs";
import { greek_word_speech_text } from "./greek_word_speech_text.mjs";
export function bible_word_speech_text(voice_name, text) {
  "$plain voice_name";
  "$plain text";
  "The words to hand a voice so it says one Bible word, given the word as the chapter spells it and the voice that is to say it.";
  ("A GREEK VOICE IS HANDED THE WORD THROUGH ",
    fn_name("greek_word_speech_text"),
    ", because a Greek word of one letter is otherwise named rather than said.");
  ("Every other language is handed the word exactly as the chapter spells it, because that spelling was heard to be said correctly.");
  let greek = voice_name.startsWith("el-");
  if (greek) {
    let fixed = greek_word_speech_text(text);
    return fixed;
  }
  return text;
}
