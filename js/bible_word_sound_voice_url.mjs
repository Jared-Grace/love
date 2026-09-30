import { arguments_assert } from "./arguments_assert.mjs";
import { bible_word_voice_url } from "./bible_word_voice_url.mjs";
export function bible_word_sound_voice_url(text, voice_name) {
  "$plain text";
  "$plain voice_name";
  "Where to fetch one Bible word said by one voice of its cast, asked word first because that is the order the voice cycle asks in.";
  arguments_assert(arguments, 2);
  let url = bible_word_voice_url(voice_name, text);
  return url;
}
