import { arguments_assert } from "./arguments_assert.mjs";
import { bible_word_voice_slow_folder_name } from "./bible_word_voice_slow_folder_name.mjs";
import { bible_word_voice_path_in } from "./bible_word_voice_path_in.mjs";
import { bible_word_voice_path_url } from "./bible_word_voice_path_url.mjs";
export function bible_word_sound_voice_slow_url(text, voice_name) {
  "$plain text";
  "$plain voice_name";
  "Where to fetch the slow saying of one Bible word by one voice of its cast - the turtle's twin of the ordinary address, asked word first because that is the order the voice cycle asks in.";
  arguments_assert(arguments, 2);
  let folder_name = bible_word_voice_slow_folder_name();
  let path = bible_word_voice_path_in(folder_name, voice_name, text);
  let url = bible_word_voice_path_url(path);
  return url;
}
