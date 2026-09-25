import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { bible_word_voice_path_url } from "./bible_word_voice_path_url.mjs";
export function bible_word_voice_url(voice_name, text) {
  "$plain voice_name";
  "$plain text";
  "Where a browser fetches the clip of one Bible word said by one voice.";
  let path = bible_word_voice_path(voice_name, text);
  let url = bible_word_voice_path_url(path);
  return url;
}
