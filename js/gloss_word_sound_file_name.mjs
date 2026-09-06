import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_key } from "./gloss_word_sound_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function gloss_word_sound_file_name(word) {
  "$plain word";
  "What one recording of one word is called, inside the folder belonging to whoever said it.";
  "★ IT IS ONE FUNCTION BECAUSE THREE SIDES HAVE TO AGREE ABOUT IT AND ONLY ONE OF THEM WOULD FIND OUT THEY DISAGREED. The recorder names the file, the uploader sends it up under that name, and the reader's phone builds the name again from the word on the screen. Spelled separately in three places, the day two of them drifted nothing would go red anywhere: the recording would be made, it would be published, and a reader would tap the word and hear silence.";
  "It says nothing about who is speaking, because the folder around it already does. That is what lets a whole voice be replaced or removed in one stroke, and it is why the name here is short enough to read.";
  arguments_assert(arguments, 1);
  let key = gloss_word_sound_key(word);
  let file_name = text_combine_multiple([key, ".mp3"]);
  return file_name;
}
