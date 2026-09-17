import { arguments_assert } from "./arguments_assert.mjs";
import { xml_text_escape } from "./xml_text_escape.mjs";
export function ssml_phoneme_speak(word, phonemes) {
  "$plain word";
  "$plain phonemes";
  "the sounds the word is made of, written in the international phonetic alphabet. They are said, never run.";
  "One word handed to a speaking voice together with the sounds it is to be said with, written in the markup Google reads.";
  "★ THE WORD STAYS INSIDE THE MARKUP RATHER THAN BEING REPLACED BY IT, because the word is what gets said if the sounds are refused. A voice that does not know this markup ignores it silently and reads what is left, so leaving the word there makes a refusal sound like today instead of like nothing at all - and an empty holder would have turned the commonest failure into silence.";
  "★ BOTH HALVES ARE ESCAPED EVEN THOUGH NEITHER IS EXPECTED TO NEED IT. A Hebrew word and a run of phonetic letters carry none of the five characters that would break the markup, which is exactly the reasoning that stops being true the first time something else is handed in.";
  "It says the sounds are phonetic alphabet rather than the other spelling Google accepts, because that is the one the stored pronunciations can be turned into letter for letter.";
  arguments_assert(arguments, 2);
  let said = xml_text_escape(word);
  let sounds = xml_text_escape(phonemes);
  let r =
    '<speak><phoneme alphabet="ipa" ph="' +
    sounds +
    '">' +
    said +
    "</phoneme></speak>";
  return r;
}
