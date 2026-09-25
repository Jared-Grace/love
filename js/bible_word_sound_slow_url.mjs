import { bible_word_voice_name } from "./bible_word_voice_name.mjs";
import { bible_word_voice_slow_folder_name } from "./bible_word_voice_slow_folder_name.mjs";
import { bible_word_voice_path_in } from "./bible_word_voice_path_in.mjs";
import { bible_word_voice_path_url } from "./bible_word_voice_path_url.mjs";
export function bible_word_sound_slow_url(text) {
  "$plain text";
  "Where to fetch the slow saying of one Bible word, given nothing but the word as it is printed on the screen - the turtle's twin of the ordinary address.";
  "The voice is worked out from the letters exactly as the ordinary saying's is, so the turtle says the word in the voice the reader just heard.";
  let voice_name = bible_word_voice_name(text);
  let folder_name = bible_word_voice_slow_folder_name();
  let path = bible_word_voice_path_in(folder_name, voice_name, text);
  let url = bible_word_voice_path_url(path);
  return url;
}
