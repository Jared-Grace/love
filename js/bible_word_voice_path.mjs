import { bible_word_voice_folder_name } from "./bible_word_voice_folder_name.mjs";
import { bible_word_voice_path_in } from "./bible_word_voice_path_in.mjs";
export function bible_word_voice_path(voice_name, text) {
  "$plain voice_name";
  "$plain text";
  "Where the clip of one Bible word said by one voice sits under the assets folder.";
  let folder_name = bible_word_voice_folder_name();
  let combined = bible_word_voice_path_in(folder_name, voice_name, text);
  return combined;
}
