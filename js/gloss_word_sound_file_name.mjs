import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_key } from "./gloss_word_sound_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function gloss_word_sound_file_name(word, voice) {
  "$plain word";
  "$plain voice";
  "What the recording of one word in one voice is called, wherever it sits.";
  "★ IT IS ONE FUNCTION BECAUSE THREE SIDES HAVE TO AGREE ABOUT IT AND ONLY ONE OF THEM WOULD FIND OUT THEY DISAGREED. The side filing a finished recording spells this name, the side sending them up reads it off the folder, and the side a reader taps builds it from a word and a voice. If the filing side and the tapping side ever spelled it differently, nothing would go red anywhere: the recording would be made, it would be published, and a reader would tap the word and hear silence.";
  "★ THE VOICE GOES ON THE END RATHER THAN INTO A FOLDER OF ITS OWN, WHICH IS WHY NOTHING ABOUT PUBLISHING HAD TO CHANGE. Storage is asked for a file name and writes a separator as a piece of the name rather than as a step in a path, so a folder here is not the free thing it looks like. A flat name is one string and every layer already carries it.";
  "It cannot be read back apart, and nothing asks it to. A word key may hold the same underscore the voice is joined with, so the two halves are not recoverable from the whole - which is fine, because every caller already holds the word and the voice and is asking what to call the pair.";
  arguments_assert(arguments, 2);
  let key = gloss_word_sound_key(word);
  let file_name = text_combine_multiple([key, "_", voice, ".mp3"]);
  return file_name;
}
