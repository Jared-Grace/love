import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_file_name } from "./gloss_word_sound_file_name.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_word_sound_path(word, voice) {
  "$plain word";
  "$plain voice";
  "Where one person's recording of one word sits, said the same way on this machine and in storage.";
  "★ THE VOICE IS A FOLDER AND NOT PART OF THE NAME, BECAUSE THE ONLY THING EVER DONE TO A WHOLE GROUP OF THESE IS DONE TO A VOICE. A voice gets recorded again when the way it says its vowels changes, and that has already happened once - which means throwing away everything one person said and keeping everything the others said. As a folder that is one stroke. Written into the name instead it is thousands of files picked out one at a time, and there is nothing to pick them out by: an underscore sits inside both halves already, so a name like isn_t_am_michael cannot be read back apart.";
  "Nobody ever wants every voice saying one word, so grouping by the word would be a folder that is never opened.";
  "It is the same fragment on both sides on purpose. Storage has no folders of its own - it stores a name and writes the separator into the address as %2F - so a path here is a name there, and one function saying it means the recorder and the reader cannot come to different conclusions about where a recording went.";
  arguments_assert(arguments, 2);
  let file_name = gloss_word_sound_file_name(word);
  let path = path_join([voice, file_name]);
  return path;
}
